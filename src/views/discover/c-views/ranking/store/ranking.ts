// src/views/discover/c-views/ranking/store/reducer.ts
//  排行榜页面的reducer

import { createSlice } from '@reduxjs/toolkit';

import { 
  getTopList,
  getRankingList
} from "@/service/ranking";

export const getTops = () => {
  return (dispatch: any) => {
    getTopList().then(res => {
      dispatch(changeTopList(res.list));
    })
  }
}

export const getRanking = (id: number) => {
  return (dispatch: any) => {
    getRankingList(id).then((res: any) => {
      dispatch(changePlayList(res.playlist))
    })
  }
}



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