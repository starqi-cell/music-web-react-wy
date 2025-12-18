// src/views/discover/c-views/djradio/store/actionCreators.ts
// 电台页面store action创建函数文件

import { getDjRadioCatelist, getDjRadioRecommend, getDjRadios } from '@/service/djradio';
import { changeCategory, changeCurrentId, changeRecommends, changeRadios } from './reducer';
import { AppDispatch } from '@/store';

export const changeCurrentIdAction = (id: number) => {
  return changeCurrentId(id);
}

export const getRadioCategories = () => {
  return (dispatch: AppDispatch) => {
    getDjRadioCatelist().then(res => {
      dispatch(changeCategory(res.categories));
      const currentId = res.categories?.[0].id;
      dispatch(changeCurrentIdAction(currentId));
    })
  }
}

export const getRadioRecommend = (currentId: number) => {
  return (dispatch: AppDispatch) => {
    getDjRadioRecommend(currentId).then(res => {
      dispatch(changeRecommends(res.djRadios));
    })
  }
}

export const getRadios = (currentId: number, offset: number) => {
  return (dispatch: AppDispatch) => {
    getDjRadios(currentId, 30, offset).then(res => {
      dispatch(changeRadios(res.djRadios));
    })
  }
}
