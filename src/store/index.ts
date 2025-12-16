// src/store/index.ts
//  全局状态管理

import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch,shallowEqual } from "react-redux";

import recommendReducer from "@/views/discover/c-views/recommend/store/recommand";
import playerReducer from "@/views/player/store/player";
import rankingReducer from "@/views/discover/c-views/ranking/store/reducer";
import songsReducer from "@/views/discover/c-views/songs/store/reducer";
import artistReducer from "@/views/discover/c-views/artist/store/reducer";
import albumReducer from "@/views/discover/c-views/album/store/reducer";
import djradioReducer from "@/views/discover/c-views/djradio/store/reducer";

const store = configureStore({
  reducer: {
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

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const appShallowEqual = shallowEqual;

export default store;