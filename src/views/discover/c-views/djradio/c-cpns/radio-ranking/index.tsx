import React, { useEffect, memo, useState } from 'react';
import { shallowEqual } from 'react-redux'

import { 
  getRadios
} from "../../store/actionCreators";

import HYThemeHeaderNormal from '@/components/theme-header-normal';
import HYRadioRankingCover from '@/components/radio-ranking-cover';
import HYPagination from '@/components/pagination';
import {
  RankingWraper
} from "./style";
import { useAppDispatch, useAppSelector } from '@/store';

export default memo(function HYRadioRanking() {
  // state
  const [currentPage, setCurrentPage] = useState(1);

  // redux
  const { currentId, radios } = useAppSelector(state => ({
    currentId: state.djradio.currentId,
    radios: state.djradio.radios
  }), shallowEqual)
  const dispatch = useAppDispatch();

  // hooks
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadios(currentId, 0))
  }, [dispatch, currentId]);

  // hanlde function
  const onPageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    dispatch(getRadios(currentId, page * 30));
  }

  return (
    <RankingWraper>
      <HYThemeHeaderNormal title="电台排行榜"/>
      <div className="ranking-list">
        {
          radios.map((item: any, index: number) => {
            return (<HYRadioRankingCover key={item.id} radio={item}/>)
          })
        }
      </div>
      <HYPagination currentPage={currentPage} 
                    total={1000} 
                    pageSize={30} 
                    onPageChange={onPageChange}/>
    </RankingWraper>
  )
})
