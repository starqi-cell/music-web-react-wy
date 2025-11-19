import { PER_PAGE_NUMBER } from './constants';
import {
  getSongCategory,
  getSongCategoryList
} from "@/service/songs";
import { 
  handleSongsCategory
} from "@/utils/handle-data";
import {
  changeCategory,
  changeCategorySongs,
  changeCurrentCategory
} from "./reducer";
import type { Dispatch } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

export const changeCurrentCategoryAction = (name: string) => {
  return changeCurrentCategory(name);
}

export const getCategory = () => {
  return (dispatch: any) => {
    getSongCategory().then(res => {
      const categoryData = handleSongsCategory(res);
      dispatch(changeCategory(categoryData))
    })
  }
}

export const getSongList = (page: number) => {
  return (dispatch: Dispatch, getState: () => RootState) => {
    // 1.获取currentCategory
    const name = getState().songs.currentCategory;

    // 2.获取数据
    getSongCategoryList(name, page * PER_PAGE_NUMBER).then(res => {
      dispatch(changeCategorySongs(res));
    });
  };
}
