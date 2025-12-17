// src/views/discover/c-views/songs/c-cpns/songs-list/style.ts
// 歌单页面列表组件样式文件

import styled from 'styled-components';

export const SongListWrapper = styled.div`
  .songs-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: -20px;
  }

  .songs-list > div {
    margin-right: 20px;
  }
`