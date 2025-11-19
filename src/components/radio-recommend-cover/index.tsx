import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { getSizeImage } from "@/utils/format";

import { CoverWrapper } from "./style";

interface IProps {
  children?: ReactNode;
  info: any;
}

const HYRadioRecomendCover: FC<IProps> = memo((props) => {
  const { info } = props;

  return (
    <CoverWrapper>
      <a href="/#">
        <div className="header">
          <img src={getSizeImage(info.picUrl, 150)} alt="" />
          <div className="name">{info.name}</div>
        </div>
      </a>
      <div className="text">
        <div className="rcmdtext">{info.rcmdtext}</div>
      </div>
    </CoverWrapper>
  )
})

export default HYRadioRecomendCover;
