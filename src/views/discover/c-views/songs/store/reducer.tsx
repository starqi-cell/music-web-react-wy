import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CategorySongs {
  playlists?: any[];
  total?: number;
}

interface SongsState {
  category: any[];
  currentCategory: string;
  categorySongs: CategorySongs;
}

const initialState: SongsState = {
  category: [],
  currentCategory: "全部",
  categorySongs: {}
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<any[]>) {
      state.category = action.payload;
    },
    changeCurrentCategory(state, action: PayloadAction<string>) {
      state.currentCategory = action.payload;
    },
    changeCategorySongs(state, action: PayloadAction<CategorySongs>) {
      state.categorySongs = action.payload;
    }
  }
});

export const { changeCategory, changeCurrentCategory, changeCategorySongs } = songsSlice.actions;
export default songsSlice.reducer;
