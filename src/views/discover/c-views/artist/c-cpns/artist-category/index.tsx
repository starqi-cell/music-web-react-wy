import React, { memo } from 'react';
import { shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { artistCategories } from '@/assets/data/local-data';

import { CategoryWrapper, CategoryItem } from './style';
import { changeCurrentAreaAction, changeCurrentTypeAction } from '../../store/actionCreators';
import { useAppDispatch, useAppSelector } from '@/store';

export default memo(function HYArtistCategory() {

  // redux hooks
  const {currentArea, currentType} = useAppSelector(state => ({
    currentArea: state.artist.currentArea,
    currentType: state.artist.currentType
  }), shallowEqual);
  const dispatch = useAppDispatch();

  // handle function
  const selectArtist = (area: number, type: { name: string, type: number }) => {
    dispatch(changeCurrentAreaAction(area));
    dispatch(changeCurrentTypeAction(type));
  }

  // render jsx
  const renderArtist = (artists: any[], area: number) => {
    return (
      <div>
        {
          artists.map((item, index) => {
            const isSelect = currentArea === area && currentType.type === item.type;
            return (
              <CategoryItem key={item.name} 
                            className={classNames({"active": isSelect})}>
                <span onClick={e => selectArtist(area, item)}>{item.name}</span>
              </CategoryItem>
            )
          })
        }
      </div>
    )
  }

  return (
    <CategoryWrapper>
      {
        artistCategories.map((item, index) => {
          return (
            <div className="section" key={item.area}>
              <h2 className="title">{item.title}</h2>
              {renderArtist(item.artists, item.area)}
            </div>
          )
        })
      }
    </CategoryWrapper>
  )
})
