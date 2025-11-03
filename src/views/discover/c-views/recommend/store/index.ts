import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getBanners } from "../service";

export const fetchBannerDataAction = createAsyncThunk("banners", async (arg,{dispatch}) => {
    const response = await getBanners();
    console.log("banners data:",response);
    dispatch(changeBannerAction(response.banners));
});

interface IRecommendState {
    banner: any[];
}

const initialState: IRecommendState = {
    banner: []
};

export const recommendSlice = createSlice({
    name: "recommend",
    initialState, 
    reducers: {
        changeBannerAction(state, { payload }) {
            state.banner = payload;
        }
    }

});

export const { changeBannerAction } = recommendSlice.actions;
export default recommendSlice.reducer;

