import React, { useEffect, memo } from 'react';
import type { FC,ReactNode } from 'react';


import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import { 
  getCategory,
  getSongList,
  changeCurrentCategoryAction
} from "./store/actionCreators";

import SongsHeader from "./c-cpns/songs-header";
import SongsList from './c-cpns/songs-list';
import {
  SongsWrapper
} from "./style"

interface IProps {
    children?: ReactNode;
}

const Songs: FC<IProps> = memo((props) => {

  const dispatch = useDispatch<any>();
  const location = useLocation();
  const cat = (location.state as any)?.cat;

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat));
  }, [dispatch, cat]);

  // hooks
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