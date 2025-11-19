import React, { memo, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';

import { getTopAlbumsAction } from '../../store/actionCreators';

import HYThemeHeaderNormal from "@/components/theme-header-normal";
import HYAlbumCover from "@/components/album-cover";
import HYPagination from '@/components/pagination';
import {
  TopAlbumWrapper
} from './style';
import { useAppDispatch, useAppSelector } from '@/store';

export default memo(function HYTopAlbum() {
  const [currentPage, setCurrentPage] = useState(1);

  const { topAlbums, total } = useAppSelector(state => ({
    topAlbums: state.album.topAlbums,
    total: state.album.topTotal
  }), shallowEqual);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopAlbumsAction(1));
  }, [dispatch]);


  const onPageChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    dispatch(getTopAlbumsAction(page))
  }

  return (
    <TopAlbumWrapper>
      <HYThemeHeaderNormal title="全部新碟" />
      <div className="album-list">
        {
          topAlbums && topAlbums.map((item: any, index: number) => {
            return <HYAlbumCover size={"130px"} 
                                 width={"153px"} 
                                 bgp={"-845px"}
                                 key={item.id} 
                                 info={item}/>
          })
        }
      </div>
      <HYPagination currentPage={currentPage} 
                    total={total} 
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </TopAlbumWrapper>
  )
})
