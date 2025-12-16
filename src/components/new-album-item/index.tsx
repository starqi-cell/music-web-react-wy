//  src/components/new-album-item/index.tsx
//  发现音乐-推荐-新碟上架单个专辑组件

import { memo } from 'react';
import type { FC,ReactNode } from 'react';
import { AlbumItemWrapper } from './style';
import { getImageSize } from '@/utils/format';

interface IProps {
    children?: ReactNode;
    itemdata?: any;
}

const NewAlbumItem: FC<IProps> = memo((props) => {

    const { itemdata } = props;

    return (
    <AlbumItemWrapper>
        <div className="top">
            <img src={getImageSize(itemdata?.picUrl,100)} alt={itemdata?.name} />
            <a href="" className="cover sprite_cover"></a>
        </div>
        <div className="bottom">
            <div className="name">{itemdata?.name}</div>
            <div className="artist">{itemdata?.artist.name}</div>
        </div>
    </AlbumItemWrapper>
    );
});

export default NewAlbumItem;