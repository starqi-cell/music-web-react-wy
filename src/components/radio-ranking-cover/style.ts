//  src/components/radio-ranking-cover/style.ts
//  电台排行榜封面组件样式

import styled from "styled-components";

export const CoverWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 48%;
  padding: 20px 0;
  border-bottom: 1px solid #e7e7e7;

  & > a {
    cursor: pointer;
    img {
      width: 120px;
      height: 120px;
    }
  }

  .info {
    margin-left: 20px;

    .title {
      a {
        color: #333;
        font-size: 18px;
        font-weight: 700;
      }
    }

    .nickname {
      margin-top: 15px;
      color: #333;
      
      i {
        display: inline-block;
        position: relative;
        top: 2px;
        margin-right: 6px;
        width: 13px;
        height: 13px;
        background: url(${require("@/assets/img/sprite_icon2.png")}) -50px -300px;
      }
    }

    .count {
      margin-top: 6px;
      color: #999;
      .phase {
        margin-right: 10px;
      }
    }
  }
`
