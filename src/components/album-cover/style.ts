//  src/components/album-cover/style.ts
//  专辑封面组件样式

import styled from "styled-components";

interface AlbumWrapperProps {
  width?: string;
  size?: string;
  bgp?: string;
}

export const AlbumWrapper = styled.div<AlbumWrapperProps>`
  width: ${props => props.width};

  .album-image {
    position: relative;
    width: 100%;
    height: ${props => props.size};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${props => props.size};
      height: ${props => props.size};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${props => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`
