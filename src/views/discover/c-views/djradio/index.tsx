// src/views/discover/c-views/djradio/index.tsx
// 电台页面

import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import RadioCategory from './c-cpns/radio-category';
import RadioRecommend from './c-cpns/radio-recommend';
import RadioRanking from './c-cpns/radio-ranking';
import { DjRadioWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const Djradio: FC<IProps> = memo(() => {

  return (
    <DjRadioWrapper className="wrap-v2">
      <RadioCategory />
      <RadioRecommend />
      <RadioRanking />
    </DjRadioWrapper>
  )
});

export default Djradio;