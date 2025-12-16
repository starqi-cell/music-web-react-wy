//  src/components/theme-header-normal/style.ts
//  通用主题头部组件样式

import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;

  .title {
    font-size: 24px;
    font-weight: normal;
  }

  .right {
    display: flex;
    align-items: center;
  }
`
