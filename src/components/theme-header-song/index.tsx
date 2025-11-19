import React, { memo } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;

  .left {
    display: flex;
    align-items: flex-end;

    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }

    .count {
      margin-bottom: 5px;
      margin-left: 20px;
    }
  }

  .right {
    .count {
      color: #c20c0c;
    }
  }
`

export default memo(function HYThemeHeaderSong() {
  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">20首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">1234</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
})
