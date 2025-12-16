import React, { useEffect, memo } from 'react';
import { shallowEqual } from 'react-redux';

import { 
  getRadioRecommend
} from "../../store/actionCreators";

import ThemeHeaderNormal from '@/components/theme-header-normal';
import AppRadioRecomendCover from '@/components/radio-recommend-cover';
import {
  RecommendWrapper
} from "./style";
import { useAppDispatch, useAppSelector } from '@/store';

export default memo(function HYRadioRecommend() {
  // redux
  const { currentId, recommends } = useAppSelector(state => ({
    currentId: state.djradio.currentId,
    recommends: state.djradio.recommends
  }), shallowEqual);
  const dispatch = useAppDispatch();

  // hooks
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadioRecommend(currentId));
  }, [dispatch, currentId])

  return (
    <RecommendWrapper>
      <ThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {
          recommends.slice(0, 5).map((item: any) => {
            return (<AppRadioRecomendCover info={item} key={item.id}/>)
          })
        }
      </div>
    </RecommendWrapper>
  )
})
