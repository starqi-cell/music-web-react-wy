import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend, getNewAlbum } from "../service";

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

interface IRecommendState {
    banner: any[];
    hotRecommends: any[];
    newAlbums: any[];
}
const initialState: IRecommendState = {
    banner: [],
    hotRecommends: [],
    newAlbums: [],
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
        }

    }

});

export const { changeBannerAction, changeHotRecommendAction, changeNewAlbumAction } = recommendSlice.actions;
export default recommendSlice.reducer;

