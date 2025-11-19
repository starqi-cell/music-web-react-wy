import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { getSizeImage } from "@/utils/format";

import { CoverWrapper } from "./style";

interface IProps {
  children?: ReactNode;
  radio: any;
}

const HYRadioRankingCover: FC<IProps> = memo((props) => {
  const { radio } = props;

  return (
    <CoverWrapper>
      <a href="/#">
        <img src={getSizeImage(radio.picUrl, 120)} alt="" />
      </a>
      <div className="info">
        <div className="title">
          <a href="/#">{radio.name}</a>
        </div>
        <div className="nickname">
          <i className="sprite_icon2"></i>
          {radio.dj.nickname}
        </div>
        <div className="count">
          <span className="phase">共{radio.programCount}期</span>
          <span className="subscribe">订阅{radio.subCount}次</span>
        </div>
      </div>
    </CoverWrapper>
  )
})

export default HYRadioRankingCover;
