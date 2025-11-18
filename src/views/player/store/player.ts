import { ILyricInfo, parseLyric } from '@/utils/parse-lyric'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric, getSongPlayUrl } from '@/views/player/service/player'
import type { RootState } from '@/store'
import { getPlayerUrl } from '@/utils/handle-player'


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
    currentSong = detailRes.songs[0]
    const newPlaySongList = [...playSongList, currentSong]
    dispatch(changePlaySongListAction(newPlaySongList))
    songIndex = newPlaySongList.length - 1
  }

  dispatch(changeCurrentSongAction(currentSong))
  dispatch(changeCurrentSongIndexAction(songIndex))

  await fetchSongLyricAndDispatch(currentSong.id, dispatch)
  await fetchSongUrlAndDispatch(currentSong.id, dispatch)
})

export const changePlaySongAction = createAsyncThunk<void,boolean,{ state: RootState }
>
('playsong', async (isNext, { dispatch, getState }) => {
  const { playMode, currentSongIndex, playSongList } = getState().player
  const length = playSongList.length
  if (!length) return

  let newIndex = currentSongIndex
  if (playMode === 1 && length > 1) {
    do {
      newIndex = Math.floor(Math.random() * length)
    } while (newIndex === currentSongIndex)
  } else {
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

async function fetchSongUrlAndDispatch(id: number, dispatch: any) {
  try {
    const res = await getSongPlayUrl(id)
    const url = res?.data?.[0]?.url ?? ''
    dispatch(changeCurrentSongUrlAction(url || getPlayerUrl(id)))
  } catch (error) {
    dispatch(changeCurrentSongUrlAction(getPlayerUrl(id)))
  }
}
