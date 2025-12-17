// src/views/discover/c-views/djradio/c-cpns/radio-category/index.tsx
// 电台分类组件

import { useEffect, useRef, memo } from 'react';
import type { FC,ReactNode } from 'react';
import { shallowEqual } from 'react-redux';
import classnames from 'classnames';
import { Carousel } from 'antd';

import { useAppDispatch, useAppSelector } from '@/store';

import {
  getRadioCategories,
  changeCurrentIdAction
} from "../../store/actionCreators";
import {
  CategoryWrapper,
  CategoryContent,
  CategoryItemImage
} from "./style";

const PAGE_SIZE = 16;

interface IProps {
    children?: ReactNode;
}

const RadioCategory: FC<IProps> = memo((props) => {

  const dispatch = useAppDispatch();
  const { categories, currentId } = useAppSelector(state => ({
    categories: state.djradio.categories,
    currentId: state.djradio.currentId
  }), shallowEqual);

  useEffect(() => {
    dispatch(getRadioCategories());
  }, [dispatch]);

  const page = Math.ceil(categories.length / PAGE_SIZE) || 1;  
  const carouselRef = useRef<any>(null);

  function getSize(index: number) {
    return index * PAGE_SIZE > categories.length ? index * PAGE_SIZE : categories.length;
  }

  return (
    <CategoryWrapper>
      <div className="arrow arrow-left" onClick={() => carouselRef.current.prev()}></div>
      <CategoryContent>
        <Carousel dots={{className: "dots"}} ref={carouselRef}>
          {
            Array(page).fill(0).map((_, index) => {
              return (
                <div key={index} className="category-page">
                  {
                    categories.slice(index * PAGE_SIZE, getSize(index + 1)).map((item: any, indey: number) => {
                      return (
                        <div key={item.id} 
                             onClick={e => dispatch(changeCurrentIdAction(item.id))}
                             className={classnames("category-item", {"active": currentId === item.id})}>
                          <CategoryItemImage className="image" imgUrl={item.picWebUrl}></CategoryItemImage>
                          <span>{item.name}</span>
                        </div>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
      </CategoryContent>
      <div className="arrow arrow-right" onClick={() => carouselRef.current.next()}></div>
    </CategoryWrapper>
  )
});

export default RadioCategory;