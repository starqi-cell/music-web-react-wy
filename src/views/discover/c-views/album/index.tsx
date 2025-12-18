// src/views/discover/c-views/album/index.tsx
// 专辑页面组件

import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import HYHotAlbum from './c-cpns/hot-album';
import HYTopAlbum from './c-cpns/all-album';
import { AblumWrapper } from './style';

interface IProps {
  children?: ReactNode;
}

const Album: FC<IProps> = memo(() => {
  return (
    <AblumWrapper className="wrap-v2">
      <HYHotAlbum/>
      <HYTopAlbum/>
    </AblumWrapper>
  )
});

export default Album;