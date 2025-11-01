import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch,shallowEqual } from "react-redux";

import counterReducer from "./modules/counter";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

type GetStateType = typeof store.getState;
type IRootState = ReturnType<GetStateType>;
type useDispatchType = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => useDispatchType = useDispatch;
export const appShallowEqual = shallowEqual;

export default store;