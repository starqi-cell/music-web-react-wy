// src/views/discover/c-views/djradio/c-cpns/radio-recommend/index.tsx
// 优秀新电台组件

import { useEffect, memo } from 'react';
import type { FC,ReactNode } from 'react';
import { shallowEqual } from 'react-redux';

import ThemeHeaderNormal from '@/components/theme-header-normal';
import AppRadioRecomendCover from '@/components/radio-recommend-cover';
import { useAppDispatch, useAppSelector } from '@/store';

import { getRadioRecommend } from "../../store/action";
import { RecommendWrapper } from "./style";

interface IProps {
    children?: ReactNode;
}

const RadioRecommend: FC<IProps> = memo((props) => {

  const { currentId, recommends } = useAppSelector(state => ({
    currentId: state.djradio.currentId,
    recommends: state.djradio.recommends
  }), shallowEqual);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadioRecommend(currentId));
  }, [dispatch, currentId])

  return (
    <RecommendWrapper>
      <ThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {
          recommends.slice(0, 5).map((item: any) => {
            return (<AppRadioRecomendCover info={item} key={item.id}/>)
          })
        }
      </div>
    </RecommendWrapper>
  )
});

export default RadioRecommend;