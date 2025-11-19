import React, { memo } from 'react';
import { shallowEqual } from 'react-redux';

import HYThemeHeaderNormal from '@/components/theme-header-normal';
import HYAlphaList from './c-cpns/alpha-list';
import HYArtistItem from './c-cpns/artist-item';
import {
  ArtistListWrapper
} from './style';
import { useAppSelector } from '@/store';

export default memo(function HYArtistList() {
  // redux hooks
  const { currentType, artistList } = useAppSelector(state => ({
    currentType: state.artist.currentType,
    artistList: state.artist.artistList
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <HYThemeHeaderNormal title={currentType.name} />
      <HYAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item: any, index: number) => {
            return <HYArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
