// src/views/discover/c-views/recommend/c-cpns/new-album/style.ts
//  新碟上架组件样式文件

import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  margin-top: 50px;

  > .content {
    justify-content: space-between;
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    align-items: center;
    padding: 0 5px;

    .arrow {
      position: relative;
      top:-10px;
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;
      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrow-right {
      background-position: -300px -75px;
      &:hover {
        background-position: -320px -75px;
      }
    }

    .banner {
        overflow: hidden;
        flex: 1;
    }
    
    .album-list {
      display: flex !important;
      justify-content: space-between;
      align-items: center;
    }
    

    .album {
      width: 640px;
      height: 150px;

      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }

      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;