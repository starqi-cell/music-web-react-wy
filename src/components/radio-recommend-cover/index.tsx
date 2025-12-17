//  src/components/radio-recommend-cover/index.tsx
//  电台推荐封面组件

import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { getImageSize } from "@/utils/format";

import { CoverWrapper } from "./style";

interface IProps {
  children?: ReactNode;
  info: any;
}

const AppRadioRecomendCover: FC<IProps> = memo((props) => {
  const { info } = props;

  return (
    <CoverWrapper>
      <a href="/#">
        <div className="header">
          <img src={getImageSize(info.picUrl, 150)} alt="" />
          <div className="name">{info.name}</div>
        </div>
      </a>
      <div className="text">
        <div className="rcmdtext">{info.rcmdtext}</div>
      </div>
    </CoverWrapper>
  )
})

export default AppRadioRecomendCover;
