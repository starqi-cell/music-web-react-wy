
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import appRequest from "@/service";
import { SearchResult } from "../type";


function searchbykeyword(keyword: string) {
    return appRequest.get({
        url: "/search",
        params: {
            keywords: keyword,
        }
    });
}

export const fetchSearchbykeywordAction = createAsyncThunk("topRadios", async (keyword: string,{ dispatch }) => {
    const response = await searchbykeyword(keyword);
    console.log('搜索结果:', response.result);
    dispatch(changeSearchResultAction(response.result));
});

const initState: SearchResult = {
    songs: [],
    songCount: 0,
};

export const searchSlice = createSlice({
    name: "search",
    initialState: initState,
    reducers: {
        changeSearchResultAction(state, { payload }) {
            state.songs = payload.songs;
            state.songCount = payload.songCount;
        }
    }
});

export const { changeSearchResultAction } = searchSlice.actions;

export default searchSlice.reducer;