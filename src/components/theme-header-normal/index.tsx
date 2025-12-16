//  src/components/theme-header-normal/index.tsx
//  通用主题头部组件

import React, { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { HeaderWrapper } from "./style";

interface IProps {
  title: string;
  rightContent?: ReactNode;
}

const ThemeHeaderNormal: FC<IProps> = memo((props) => {
  const { title="", rightContent="" } = props;

  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      <div className="right">{rightContent}</div>
    </HeaderWrapper>
  )
})

export default ThemeHeaderNormal;
