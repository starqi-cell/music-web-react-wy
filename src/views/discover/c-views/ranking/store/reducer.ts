import { createSlice } from '@reduxjs/toolkit';

interface IRankingState {
  topList: any[];
  currentIndex: number;
  playList: Record<string, any>;
}

const initialState: IRankingState = {
  topList: [],
  currentIndex: 0,
  playList: {}
};

const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    changeTopList(state, { payload }) {
      state.topList = payload;
    },
    changeCurrentIndex(state, { payload }) {
      state.currentIndex = payload;
    },
    changePlayList(state, { payload }) {
      state.playList = payload;
    }
  }
});

export const { changeTopList, changeCurrentIndex, changePlayList } = rankingSlice.actions;

export default rankingSlice.reducer;