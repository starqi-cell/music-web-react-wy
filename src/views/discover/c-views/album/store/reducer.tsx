// src/views/discover/c-views/album/store/reducer.tsx
// 专辑页面store reducer文件

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AlbumState {
  hotAlbums: any[];
  topAlbums: any[];
  topTotal: number;
}

const initialState: AlbumState = {
  hotAlbums: [],
  topAlbums: [],
  topTotal: 0
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    changeHotAlbums(state, action: PayloadAction<any[]>) {
      state.hotAlbums = action.payload || [];
    },
    changeTopAlbums(state, action: PayloadAction<any[]>) {
      state.topAlbums = action.payload || [];
    },
    changeTopTotal(state, action: PayloadAction<number>) {
      state.topTotal = action.payload;
    }
  }
});

export const { changeHotAlbums, changeTopAlbums, changeTopTotal } = albumSlice.actions;
export default albumSlice.reducer;
