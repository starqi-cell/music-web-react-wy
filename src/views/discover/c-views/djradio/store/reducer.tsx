import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DjRadioState {
  categories: any[];
  currentId: number;
  recommends: any[];
  radios: any[];
}

const initialState: DjRadioState = {
  categories: [],
  currentId: 0,
  recommends: [],
  radios: []
};

const djRadioSlice = createSlice({
  name: 'djradio',
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<any[]>) {
      state.categories = action.payload;
    },
    changeCurrentId(state, action: PayloadAction<number>) {
      state.currentId = action.payload;
    },
    changeRecommends(state, action: PayloadAction<any[]>) {
      state.recommends = action.payload;
    },
    changeRadios(state, action: PayloadAction<any[]>) {
      state.radios = action.payload;
    }
  }
});

export const { changeCategory, changeCurrentId, changeRecommends, changeRadios } = djRadioSlice.actions;
export default djRadioSlice.reducer;
