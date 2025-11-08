import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend, getNewAlbum,getPlayListDetail } from "../service";

export const fetchBannerDataAction = createAsyncThunk("banners", async (arg,{dispatch}) => {
    const response = await getBanners();
    console.log("banners data:",response);
    dispatch(changeBannerAction(response.banners));
});

export const fetchHotRecommendAction=createAsyncThunk("hotRecommend", async (arg,{dispatch}) => {
    const response=await getHotRecommend(8);
    console.log("hotRecommend data:",response);
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

interface IRecommendState {
    banner: any[];
    hotRecommends: any[];
    newAlbums: any[];
    rankings: any[];
}
const initialState: IRecommendState = {
    banner: [],
    hotRecommends: [],
    newAlbums: [],
    rankings: []
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
    }
    }
});

export const { changeBannerAction, changeHotRecommendAction, changeNewAlbumAction, changePlayListDetailAction } = recommendSlice.actions;
export default recommendSlice.reducer;

