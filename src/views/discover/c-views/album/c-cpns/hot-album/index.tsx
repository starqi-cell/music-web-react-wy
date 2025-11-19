import React, { memo, useEffect } from 'react';
import { shallowEqual } from 'react-redux';

import { getHotAlbumsAction } from '../../store/actionCreators';

import HYAlbumCover from '@/components/album-cover';
import HYThemeHeaderNormal from '@/components/theme-header-normal';
import {
  HotAlbumWrapper
} from './style';
import { useAppDispatch, useAppSelector } from '@/store';

export default memo(function HYHotAlbum() {

  const { hotAlbums } = useAppSelector(state => ({
    hotAlbums: state.album.hotAlbums
  }), shallowEqual)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHotAlbumsAction());
  }, [dispatch]);

  return (
    <HotAlbumWrapper>
      <HYThemeHeaderNormal title="热门新碟" />
      <div className="album-list">
        {
          hotAlbums && hotAlbums.slice(0, 10).map((item: any, index: number) => {
            return <HYAlbumCover size={"130px"} 
                                 width={"153px"} 
                                 bgp={"-845px"}
                                 key={item.id} 
                                 info={item}/>
          })
        }
      </div>
    </HotAlbumWrapper>
  )
});
