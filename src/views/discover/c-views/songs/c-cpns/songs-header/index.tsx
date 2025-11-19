import React, { FC,ReactNode,useState, memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import SongsCategory from '../songs-category'
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from "./style";

import { useAppSelector } from '@/store/index';

interface IProps {
    children?: ReactNode;
}

const SongsHeader: FC<IProps> = memo((props) => {
  // hooks
  const [showCategory, setShowCategory] = useState(false);

  // redux
  const { currentCategory } = useAppSelector(state => ({
    currentCategory: state.songs.currentCategory
  }), shallowEqual);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" onClick={e => setShowCategory(!showCategory)}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCategory ? <SongsCategory /> : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  )
})

export default memo(SongsHeader);