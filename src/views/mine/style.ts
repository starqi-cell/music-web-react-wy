// src/views/mine/style.ts
//  我的页面样式文件

import styled from 'styled-components';

export const MineWrapper = styled.div`
  .content {
    background-color: #fff;
    min-height: 700px;
    border: 1px solid #d3d3d3;
    border-bottom: none;
    border-top: none;

    .pic {
      position: relative;
      width: 807px;
      height: 372px;
      margin: 0 auto;
      background: url(${require("@/assets/img/mine_sprite.png")}) 0 104px no-repeat;

      .login {
        position: absolute;
        width: 167px;
        height: 45px;
        left: 482px;
        top: 302px;
        text-indent: -9999px;
      }
    }
  }
`