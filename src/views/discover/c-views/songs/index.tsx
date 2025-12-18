// src/views/discover/c-views/songs/index.tsx
//  歌单页面组件

import { useEffect, memo } from 'react';
import type { FC,ReactNode } from 'react';
import { useAppDispatch } from '@/store';
import { 
  getCategory,
  getSongList,
  changeCurrentCategoryAction
} from "./store/action";
import SongsHeader from "./c-cpns/songs-header";
import SongsList from './c-cpns/songs-list';
import {
  SongsWrapper
} from "./style"

interface IProps {
    children?: ReactNode;
}

const Songs: FC<IProps> = memo((props) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getSongList(0));
  }, [dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <SongsHeader/>
      <SongsList/>
    </SongsWrapper>
  )
});

export default memo(Songs);