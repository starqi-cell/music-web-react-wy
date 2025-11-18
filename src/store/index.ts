import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch,shallowEqual } from "react-redux";

import counterReducer from "./modules/counter";
import recommendReducer from "@/views/discover/c-views/recommend/store/recommand";
import playerReducer from "@/views/player/store/player";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer, 
    player: playerReducer
  },
});

type GetStateType = typeof store.getState;
type IRootState = ReturnType<GetStateType>;
type useDispatchType = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => useDispatchType = useDispatch;
export const appShallowEqual = shallowEqual;

export default store;