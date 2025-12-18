// src/views/discover/c-views/album/c-cpns/hot-album/index.tsx
//  热门新碟组件

import { memo, useEffect } from 'react';
import type { FC,ReactNode } from 'react';
import { shallowEqual } from 'react-redux';

import { useAppDispatch, useAppSelector } from '@/store';
import AlbumCover from '@/components/album-cover';
import ThemeHeaderNormal from '@/components/theme-header-normal';

import { HotAlbumWrapper } from './style';
import { getHotAlbumsAction } from '../../store/action';

interface IProps {
    children?: ReactNode;
}

const HotAlbum: FC<IProps> = memo((props) => {

  const { hotAlbums } = useAppSelector(state => ({
    hotAlbums: state.album.hotAlbums
  }), shallowEqual)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHotAlbumsAction());
  }, [dispatch]);

  return (
    <HotAlbumWrapper>
      <ThemeHeaderNormal title="热门新碟" />
      <div className="album-list">
        {
          hotAlbums && hotAlbums.slice(0, 10).map((item: any, index: number) => {
            return <AlbumCover size={"130px"} 
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

export default HotAlbum;