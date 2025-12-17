// src/views/discover/c-views/songs/c-cpns/songs-category/index.tsx
// 歌单页面分类组件

import { FC,ReactNode,memo } from 'react';
import { shallowEqual } from "react-redux";

import {
  changeCurrentCategoryAction,
  getSongList
} from "../../store/actionCreators";

import {
  CategoryWrapper
} from "./style";

import { useAppSelector, useAppDispatch } from '@/store/index';

interface IProps {
    children?: ReactNode;
}

const SongsCategory: FC<IProps> = memo((props) => {

  const { category } = useAppSelector(state => ({
    category: state.songs.category
  }), shallowEqual);

  const dispatch = useAppDispatch();

  function selectCategory(name:any) {
    dispatch(changeCurrentCategoryAction(name));
    dispatch(getSongList(0));
  }

  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={() => selectCategory("全部")}>全部风格</span>
      </div>
      <div className="category">
        {
          category.map((item: any, index: number) => {
            return (
              <dl key={item.name} className={"item" + index}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                <dd>
                  {
                    item.subs.map((sItem: any) => {
                      return (
                        <div className="item" key={sItem.name}>
                          <span className="link" onClick={() => selectCategory(sItem.name)}>{sItem.name}</span>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </CategoryWrapper>
  )
})

export default SongsCategory;
