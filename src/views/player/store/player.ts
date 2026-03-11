// src/views/player/store/player.ts
//  播放器页面store文件
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { ILyricInfo, parseLyric } from '@/utils/parse-lyric'
import { getPlayerUrl } from '@/utils/handle-player'
import type { RootState } from '@/store'

import { getSongDetail, getSongLyric, getSongPlayUrl } from '../service/player'

// 根据歌曲id获取当前歌曲信息，并更新相关数据
export const fetchCurrentSongDataAction = createAsyncThunk<void,number,{ state: RootState } 
>
  ('currentSong', async (id:number, { dispatch, getState }) => {
  if (!id) return

  const playSongList = getState().player.playSongList
  let songIndex = playSongList.findIndex((song: any) => song.id === id)
  let currentSong = playSongList[songIndex]

  if (!currentSong) {
    const detailRes = await getSongDetail(id)
    if (!detailRes?.songs?.length) return
    currentSong = detailRes.songs?.[0]
    const newPlaySongList = [...playSongList, currentSong]
    dispatch(changePlaySongListAction(newPlaySongList))
    songIndex = newPlaySongList.length - 1
  }

  dispatch(changeCurrentSongAction(currentSong))
  dispatch(changeCurrentSongIndexAction(songIndex))

  await fetchSongLyricAndDispatch(currentSong.id, dispatch)
  await fetchSongUrlAndDispatch(currentSong.id, dispatch)
})

// 切换播放歌曲（随机/上一首/下一首）
export const changePlaySongAction = createAsyncThunk<void,boolean,{ state: RootState }
>
('playsong', async (isNext, { dispatch, getState }) => {
  const { playMode, currentSongIndex, playSongList } = getState().player
  const length = playSongList.length
  if (!length) return

  let newIndex = currentSongIndex
  //playMode = 1 随机播放
  if (playMode === 1 && length > 1) {
    do {
      newIndex = Math.floor(Math.random() * length)
    } while (newIndex === currentSongIndex)
  } else {
    // isnext = true 下一首 false 上一首
    newIndex = isNext ? newIndex + 1 : newIndex - 1
    if (newIndex >= length) newIndex = 0
    if (newIndex < 0) newIndex = length - 1
  }

  const currentSong = playSongList[newIndex]
  dispatch(changeCurrentSongAction(currentSong))
  dispatch(changeCurrentSongIndexAction(newIndex))

  await fetchSongLyricAndDispatch(currentSong.id, dispatch)
  await fetchSongUrlAndDispatch(currentSong.id, dispatch)
})

// 获取歌词并更新到store
async function fetchSongLyricAndDispatch(id: number, dispatch: any) {
  try {
    const res = await getSongLyric(id);
    const lyricString = res?.lrc?.lyric ?? ''
    const lyrics = lyricString ? parseLyric(lyricString) : []
    dispatch(changeLyricsAction(lyrics))
    dispatch(changeLyricIndexAction(-1))
  } catch (error) {
    dispatch(changeLyricsAction([]))
    dispatch(changeLyricIndexAction(-1))
  }
}

// 用于存储当前的 AbortController
let currentSongUrlAbortController: AbortController | null = null;

// 获取歌曲播放地址并更新到store
async function fetchSongUrlAndDispatch(id: number, dispatch: any) {
  // 如果存在上一次未完成的请求，取消它
  if (currentSongUrlAbortController) {
    currentSongUrlAbortController.abort();
    currentSongUrlAbortController = null;
  }

  // 创建新的 AbortController
  currentSongUrlAbortController = new AbortController();
  const signal = currentSongUrlAbortController.signal;

  try {
    const res = await getSongPlayUrl(id, signal)
    const url = res?.data?.[0]?.url ?? ''
    dispatch(changeCurrentSongUrlAction(url || getPlayerUrl(id)))
  } catch (error: any) {
    // 如果是取消请求导致的错误，直接返回，不更新状态
    if (error.code === 'ERR_CANCELED' || error.name === 'AbortError' || error.message === 'canceled') {
      return;
    }
    dispatch(changeCurrentSongUrlAction(getPlayerUrl(id)))
  } finally {
    // 请求完成（无论成功失败），清除 controller 引用
    if (currentSongUrlAbortController?.signal === signal) {
      currentSongUrlAbortController = null;
    }
  }
}

interface IPlayState {
  currentSong: any
  currentSongUrl: string
  lyrics: ILyricInfo[]
  lyricIndex: number
  playSongList: any[]
  currentSongIndex: number
  playMode: number
}
const initialState: IPlayState = {
  currentSong: {},
  currentSongUrl: '',
  lyrics: [],
  lyricIndex: -1,
  playSongList: [],
  currentSongIndex: 0,
  playMode: 0
}

const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeCurrentSongUrlAction(state, { payload }) {
      state.currentSongUrl = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload
    },
    changeCurrentSongIndexAction(state, { payload }) {
      state.currentSongIndex = payload
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeCurrentSongUrlAction,
  changeLyricsAction,
  changeLyricIndexAction,
  changePlaySongListAction,
  changeCurrentSongIndexAction,
  changePlayModeAction
} = playerSlice.actions

export default playerSlice.reducer