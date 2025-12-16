import React, { useEffect, memo, useState } from 'react';
import { shallowEqual } from 'react-redux'

import { 
  getRadios
} from "../../store/actionCreators";

import ThemeHeaderNormal from '@/components/theme-header-normal';
import AppRadioRankingCover from '@/components/radio-ranking-cover';
import AppPagination from '@/components/pagination';
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
      <ThemeHeaderNormal title="电台排行榜"/>
      <div className="ranking-list">
        {
          radios.map((item: any, index: number) => {
            return (<AppRadioRankingCover key={item.id} radio={item}/>)
          })
        }
      </div>
      <AppPagination currentPage={currentPage} 
                    total={1000} 
                    pageSize={30} 
                    onPageChange={onPageChange}/>
    </RankingWraper>
  )
})
