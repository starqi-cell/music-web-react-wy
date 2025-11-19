import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch,shallowEqual } from "react-redux";
import type { AnyAction } from '@reduxjs/toolkit';

import counterReducer from "./modules/counter";
import recommendReducer from "@/views/discover/c-views/recommend/store/recommand";
import playerReducer from "@/views/player/store/player";
import rankingReducer from "@/views/discover/c-views/ranking/store/reducer";
import songsReducer from "@/views/discover/c-views/songs/store/reducer";
import artistReducer from "@/views/discover/c-views/artist/store/reducer";
import albumReducer from "@/views/discover/c-views/album/store/reducer";
import djradioReducer from "@/views/discover/c-views/djradio/store/reducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer, 
    player: playerReducer,
    ranking: rankingReducer,
    songs: songsReducer,
    artist: artistReducer,
    album: albumReducer,
    djradio: djradioReducer
  },
});

type GetStateType = typeof store.getState;
type IRootState = ReturnType<GetStateType>;
type useDispatchType = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const appShallowEqual = shallowEqual;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;