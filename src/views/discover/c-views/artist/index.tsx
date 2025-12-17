import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

import HYArtistCategory from './c-cpns/artist-category';
import HYArtistList from './c-cpns/artist-list';
import { HYArtistWrapper } from './style';

interface IProps {
  children?: ReactNode;
}

const Artist: FC<IProps> = memo(() => {
  return (
    <HYArtistWrapper>
      <div className="content wrap-v2">
        <HYArtistCategory/>
        <HYArtistList/>
      </div>
    </HYArtistWrapper>
  )
});

export default Artist;