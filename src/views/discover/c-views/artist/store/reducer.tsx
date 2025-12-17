// src/views/discover/c-views/artist/store/reducer.tsx
// 歌手页面store reducer文件

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ArtistState {
  currentArea: number;
  currentType: {
    name: string;
    type: number;
  };
  artistList: any[];
}

const initialState: ArtistState = {
  currentArea: 7,
  currentType: {
    name: "推荐歌手",
    type: 1
  },
  artistList: []
};

const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    changeCurrentArea(state, action: PayloadAction<number>) {
      state.currentArea = action.payload;
    },
    changeCurrentType(state, action: PayloadAction<{ name: string; type: number }>) {
      state.currentType = action.payload;
    },
    changeArtistList(state, action: PayloadAction<any[]>) {
      state.artistList = action.payload;
    }
  }
});

export const { changeCurrentArea, changeCurrentType, changeArtistList } = artistSlice.actions;
export default artistSlice.reducer;
