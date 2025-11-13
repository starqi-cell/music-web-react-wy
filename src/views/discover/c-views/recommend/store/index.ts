import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getSettleSinger, getHotRecommend, getNewAlbum,getPlayListDetail } from "../service";

export const fetchBannerDataAction = createAsyncThunk("banners", async (arg,{dispatch}) => {
    const response = await getBanners();
    dispatch(changeBannerAction(response.banners));
});

export const fetchHotRecommendAction=createAsyncThunk("hotRecommend", async (arg,{dispatch}) => {
    const response=await getHotRecommend(8);
    dispatch(changeHotRecommendAction(response.result))

});

export const fetchNewAlbumAction=createAsyncThunk("newAlbum", async (arg,{dispatch}) => {
    const response=await getNewAlbum();
    dispatch(changeNewAlbumAction(response.albums))
});

const rankingIds=[19723756,3779629,2884035];
export const fetchPlayListDetailAction = createAsyncThunk("rankingData", async (_, { dispatch }) => {
    const promises = rankingIds.map((id) => getPlayListDetail(id));
    const res = await Promise.all(promises);
    const playlists = res.map((item) => item.playlist);
    dispatch(changePlayListDetailAction(playlists));
});

export const fetchSettleSingerAction=createAsyncThunk("settleSingerData", async (_, { dispatch }) => {
    const response=await getSettleSinger(5);
    dispatch(changeSettleSingerAction(response.artists ?? []));
});

interface IRecommendState {
    banner: any[];
    hotRecommends: any[];
    newAlbums: any[];
    rankings: any[];
    settleSingers: any[];
}
const initialState: IRecommendState = {
    banner: [],
    hotRecommends: [],
    newAlbums: [],
    rankings: [],
    settleSingers: []
};


export const recommendSlice = createSlice({
    name: "recommend",
    initialState, 
    reducers: {
        changeBannerAction(state, { payload }) {
            state.banner = payload;
        },
        changeHotRecommendAction(state,{ payload }){
            state.hotRecommends=payload;
        },
        changeNewAlbumAction(state,{ payload }){
            state.newAlbums=payload;
        },
        changePlayListDetailAction(state,{ payload }){
            state.rankings=payload;
        },
        changeSettleSingerAction(state,{ payload }){
            state.settleSingers=payload;
        }
    }
});

export const { changeBannerAction, changeHotRecommendAction, changeNewAlbumAction, changePlayListDetailAction, changeSettleSingerAction } = recommendSlice.actions;
export default recommendSlice.reducer;

