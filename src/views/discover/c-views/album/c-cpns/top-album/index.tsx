import React, { memo, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';

import { getTopAlbumsAction } from '../../store/actionCreators';

import ThemeHeaderNormal from "@/components/theme-header-normal";
import AlbumCover from "@/components/album-cover";
import AppPagination from '@/components/pagination';
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
      <ThemeHeaderNormal title="全部新碟" />
      <div className="album-list">
        {
          topAlbums && topAlbums.map((item: any, index: number) => {
            return <AlbumCover size={"130px"} 
                                 width={"153px"} 
                                 bgp={"-845px"}
                                 key={item.id} 
                                 info={item}/>
          })
        }
      </div>
      <AppPagination currentPage={currentPage} 
                    total={total} 
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </TopAlbumWrapper>
  )
})
