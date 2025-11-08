import React,{memo} from 'react';
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

export default memo(NewAlbumItem);