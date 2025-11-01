import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',

  initialState: {
    count: 0,
    message: 'hello world',
  },

  reducers: {
    changeMessageAction(state,{ payload }) {
      state.message = payload;
    }
  }
});

export const { changeMessageAction } = counterSlice.actions;
export default counterSlice.reducer;
