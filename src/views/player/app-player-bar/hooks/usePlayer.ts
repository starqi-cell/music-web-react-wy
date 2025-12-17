// src/views/player/app-player-bar/hooks/usePlayer.ts
//  底部播放器自定义hook

import { useRef, useState, useEffect, useCallback } from 'react'
import { shallowEqual } from 'react-redux'
import { message } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  changeLyricIndexAction,
  changePlayModeAction,
  changePlaySongAction
} from '../../store/player'

export function usePlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChanging, setIsChanging] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const sliderChangeTimerRef = useRef<number | null>(null)
  const pendingSliderTimeRef = useRef(0)

  const dispatch = useAppDispatch()
  const { currentSong, currentSongUrl, lyrics, lyricIndex, playMode, playSongList } =
    useAppSelector(
      (state) => ({
        currentSong: state.player.currentSong,
        currentSongUrl: state.player.currentSongUrl,
        lyrics: state.player.lyrics,
        lyricIndex: state.player.lyricIndex,
        playMode: state.player.playMode,
        playSongList: state.player.playSongList
      }),
      shallowEqual
    )

  // 当当前歌曲地址变化时，重新加载音频
  useEffect(() => {
    if (!audioRef.current) return
    if (!currentSongUrl) {
      setIsPlaying(false)
      audioRef.current.pause()
      return
    }

    audioRef.current.src = currentSongUrl
    audioRef.current.currentTime = 0

    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false))

    setDuration(currentSong.dt ?? 0)
    setProgress(0)
    setCurrentTime(0)
  }, [currentSongUrl, currentSong.dt])

  // 清理定时器
  useEffect(() => {
    return () => {
      if (sliderChangeTimerRef.current) {
        clearTimeout(sliderChangeTimerRef.current)
      }
    }
  }, [])

  // 音频时间更新处理
  const handleTimeUpdate = () => {
    if (!audioRef.current) return

    const currentTimeMs = audioRef.current.currentTime * 1000

    if (!isChanging) {
      setCurrentTime(currentTimeMs)
      setProgress(duration ? (currentTimeMs / duration) * 100 : 0)
    }

    if (!lyrics.length) return

    let left = 0
    let right = lyrics.length - 1
    let index = -1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (lyrics[mid].time <= currentTimeMs) {
        index = mid
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    if (index !== -1 && index !== lyricIndex) {
      dispatch(changeLyricIndexAction(index))
      message.open({
        content: lyrics[index].content,
        key: 'lyric',
        duration: 0,
        style: { bottom: '60px' }
      })
    }
  }

  // 音频播放结束处理
  const handlePlayEnded = () => {
    // 根据播放模式处理播放结束逻辑
    //playMode = 2 顺序播放
    if (playMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current!.play()
      //下一首
    } else {
      dispatch(changePlaySongAction(true))
    }
  }

  // 进度条变化处理
  const handleSliderChange = (value: number) => {
    setIsChanging(true)
    const currentMs = (value / 100) * duration
    setProgress(value)
    setCurrentTime(currentMs)
    pendingSliderTimeRef.current = currentMs
    if (sliderChangeTimerRef.current) {
      clearTimeout(sliderChangeTimerRef.current)
    }
    sliderChangeTimerRef.current = window.setTimeout(() => {
      audioRef.current!.currentTime = pendingSliderTimeRef.current / 1000
      setIsChanging(false)
    }, 300)
  }

    // 播放/暂停切换
    const togglePlay = useCallback(() => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
        audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    } else {
        audioRef.current.pause()
        setIsPlaying(false)
    }
    }, [currentSongUrl])

    // 切换歌曲
  const changeSong = useCallback((isNext: boolean) => {
    if (!playSongList.length) {
      message.warning('暂无可播放的歌曲')
      return
    }
    dispatch(changePlaySongAction(isNext))
  }, [dispatch, playSongList.length])

  // 切换播放模式
  const changeMode = useCallback(() => {
    dispatch(changePlayModeAction((playMode + 1) % 3))
  }, [playMode, dispatch])

  // 音频元数据加载完成处理
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration * 1000)
    }
  }

  return {
    isPlaying,
    currentTime,
    duration,
    progress,
    playMode,
    currentSong,
    currentSongUrl,
    audioRef,
    handleTimeUpdate,
    handlePlayEnded,
    handleSliderChange,
    handleLoadedMetadata,
    togglePlay,
    changeSong,
    changeMode
  }
}
