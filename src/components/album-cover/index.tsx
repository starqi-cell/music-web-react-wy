//  src/components/album-cover/index.tsx
//  专辑封面组件

import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import { getSizeImage } from "@/utils/format";

import { AlbumWrapper } from './style';

interface IProps {
  children?: ReactNode;
  info: any;
  size?: string;
  width?: string;
  bgp?: string;
}

const AlbumCover: FC<IProps> = memo((props) => {
  const { info, size = "100px", width = "118px", bgp = "-570px" } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 150)} alt="专辑封面" />
        <a href="/todo" className="cover image_cover">{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  )
});

export default AlbumCover;
