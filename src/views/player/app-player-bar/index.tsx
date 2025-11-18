import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { BarControl, BarOperator, BarPlayInfo, BarWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { NavLink } from 'react-router-dom'
import { Slider, message } from 'antd'
import { shallowEqual } from 'react-redux'
import { formatTime } from '@/utils/handle-player'
import {
  changeLyricIndexAction,
  changePlayModeAction,
  changePlaySongAction
} from '../store/player'

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  /** 定义组件内部的数据 */
  const [isPlaying, setIsPlaying] = useState(false)
  const [isChanging, setIsChanging] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)
  const sliderChangeTimerRef = useRef<number | null>(null)
  const pendingSliderTimeRef = useRef(0)




  /** 从redux中获取数据 */
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
  const dispatch = useAppDispatch()



  const singerName = (currentSong?.ar ?? [])
    .map((item: any) => item.name)
    .join(' / ')
  const coverPic = currentSong?.al?.picUrl
  const coverUrl = coverPic
    ? `${coverPic}?param=34y34`
    : 'https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34'
  const sliderValue = Number.isFinite(progress) ? progress : 0

  /** 监听currentSong的变化 */
  useEffect(() => {
    if (!audioRef.current) return
    if (!currentSongUrl) {
      audioRef.current.pause()
      setIsPlaying(false)
      return
    }

    audioRef.current.src = currentSongUrl
    audioRef.current.currentTime = 0
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch((err) => {
        console.log('播放失败:', err)
        setIsPlaying(false)
      })

    const songDuration = currentSong.dt ?? 0
    setDuration(songDuration)
    setProgress(0)
    setCurrentTime(0)
  }, [currentSongUrl, currentSong.dt])

  /** 事件处理的逻辑 */
  function handleTimeUpdate() {
    if (!audioRef.current) return
    // 1.获取当前的时间
    const currentTimeMs = audioRef.current.currentTime * 1000

    // 2.设置展示的内容
    if (!isChanging) {
      setCurrentTime(currentTimeMs)
      const progress = duration ? (currentTimeMs / duration) * 100 : 0
      setProgress(progress)
    }

    // 3.匹配歌词
    if (!lyrics.length) return
    let index = lyrics.length - 1
    let left = 0
    let right = lyrics.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (lyrics[mid].time === currentTimeMs) {
        index = mid - 1
        break
      } else if (lyrics[mid].time < currentTimeMs) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    index = right

    // 4.匹配歌词
    if (lyricIndex === index || index === -1) return
    dispatch(changeLyricIndexAction(index))
    const currentLyric = lyrics[index]
    if (!currentLyric) return
    message.open({
      content: currentLyric.content,
      duration: 0,
      key: 'lyric',
      style: {
        bottom: '60px'
      }
    })
  }

  function handlePlayEnded() {
    if (!audioRef.current) return
    if (playMode === 2) {
      audioRef.current.currentTime = 0
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
      setCurrentTime(0)
      setProgress(0)
    } else {
      handleChangeBtnClick(true)
    }
  }

  useEffect(() => {
    return () => {
      if (sliderChangeTimerRef.current) {
        window.clearTimeout(sliderChangeTimerRef.current)
      }
    }
  }, [])

  function handleSliderChange(value: number) {
    setIsChanging(true)
    setProgress(value)
    const currentTime = (value / 100) * duration
    pendingSliderTimeRef.current = currentTime
    setCurrentTime(currentTime)

    if (sliderChangeTimerRef.current) {
      window.clearTimeout(sliderChangeTimerRef.current)
    }

    sliderChangeTimerRef.current = window.setTimeout(() => {
      if (!audioRef.current) return
      audioRef.current.currentTime = pendingSliderTimeRef.current / 1000
      setIsChanging(false)
    }, 150)
  }

  function handleLoadedMetadata() {
    if (!audioRef.current) return
    const realDuration = audioRef.current.duration
    if (!Number.isNaN(realDuration)) {
      setDuration(realDuration * 1000)
    }
  }

  /** 播放功能的交互 */
  function handlePlayBtnClick() {
    if (!audioRef.current) return
    if (!currentSongUrl) {
      message.warning('当前歌曲暂无可播放资源')
      return
    }

    const isPaused = audioRef.current.paused
    if (isPaused) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  function handleChangeBtnClick(isNext:boolean) {
    if (!playSongList.length) {
      message.warning('暂无可播放的歌曲')
      return
    }
    dispatch(changePlaySongAction(isNext))
  }

  function handlePlayModeClick() {
    let newPlayMode = (playMode + 1) % 3
    dispatch(changePlayModeAction(newPlayMode))
  }

  return (
    <BarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <BarControl isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeBtnClick(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeBtnClick(true)}
          ></button>
        </BarControl>
        <BarPlayInfo>
          <NavLink to="/discover/player">
            <img src={coverUrl} alt={currentSong.name ?? '歌曲封面'} />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">
                {currentSong.name ?? '未选择歌曲'}
              </span>
              <span className="singer-name">{singerName || '未知歌手'}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                value={sliderValue}
                onChange={handleSliderChange}
                tooltip={{ formatter: null }}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayInfo>
        <BarOperator playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              onClick={handlePlayModeClick}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>
      <audio
        ref={audioRef}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handlePlayEnded}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </BarWrapper>
  )
}

export default memo(AppPlayerBar)
