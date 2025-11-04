import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners, getHotRecommend } from "../service";

export const fetchBannerDataAction = createAsyncThunk("banners", async (arg,{dispatch}) => {
    const response = await getBanners();
    console.log("banners data:",response);
    dispatch(changeBannerAction(response.banners));
});

export const fetchHotRecommendAction=createAsyncThunk("hotRecommend", async (arg,{dispatch}) => {
    const response=await getHotRecommend(8);
    console.log("hotRecommend data:",response);
    dispatch(changeHotRecommendAction(response.result))

})

interface IRecommendState {
    banner: any[];
    hotRecommends: any[];
}
const initialState: IRecommendState = {
    banner: [],
    hotRecommends: [],
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
        }
    }

});

export const { changeBannerAction, changeHotRecommendAction } = recommendSlice.actions;
export default recommendSlice.reducer;

