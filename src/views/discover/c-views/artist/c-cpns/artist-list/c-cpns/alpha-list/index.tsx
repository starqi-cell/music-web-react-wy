// 歌手首字母列表组件
// 用于展示歌手列表的首字母筛选功能

import { memo, useState, useEffect } from 'react';
import type { FC,ReactNode } from 'react';
import { shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { singerAlphas } from '@/utils/handle-data';
import { useAppDispatch, useAppSelector } from '@/store';

import { getArtistListAction } from '../../../../store/actionCreators';
import { AlphaListWrapper } from './style';

interface IProps {
    children?: ReactNode;
}

const AlphaList: FC<IProps> = memo((props) => {
  const [currentAlpha, setCurrentAlpha] = useState("-1");

  const { currentType, currentArea } = useAppSelector(state => ({
    currentType: state.artist.currentType,
    currentArea: state.artist.currentArea
  }), shallowEqual);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setCurrentAlpha("-1");
  }, [currentType, currentArea]);

  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha));
  }, [currentAlpha, currentType, currentArea, dispatch]);

  return (
    <AlphaListWrapper hasTop={currentArea !== -1}>
      {
        currentArea !== -1 && singerAlphas.map((item, index) => {
          const isActive = currentAlpha === item;
          let showName = item;
          if (item === "0") showName = "其他";
          if (item === "-1") showName = "热门";
          return (
            <div key={item}
                 className={classNames("item", {"active": isActive})}>
              <span onClick={e => setCurrentAlpha(item)}>{showName.toUpperCase()}</span>
            </div>
          )
        })
      }
    </AlphaListWrapper>
  )
});

export default AlphaList;
