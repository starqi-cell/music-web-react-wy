//  src/components/songs-menu-item/index.tsx
//  热门推荐单个组件

import { memo } from 'react';
import type { FC,ReactNode } from 'react';

import { formatPlayCount,getImageSize } from '@/utils/format';

import { MenuItemWrapper } from './style';

interface IProps {
    children?: ReactNode;
    itemData?: any;
}

const SongMenuItem: FC<IProps> = memo((props) => {
    const { itemData } = props;

    return( 
    <MenuItemWrapper>
        <div className='top' style={{ display: 'block' }}>
            <img src={getImageSize(itemData?.picUrl || itemData?.coverImgUrl, 140)} alt={itemData?.name} />
            <a href="/#">
                <div className='cover sprite_cover'>
                    <div className='info sprite_cover'>
                        <span>
                            <i className='sprite_icon headset'></i>
                            <span className='count'>{formatPlayCount(itemData?.playCount)}</span>
                        </span>
                        <i className='sprite_icon play'></i>
                    </div>
                </div>
            </a>
        </div>
        <a href="/#">
            <div className='bottom'>{itemData?.name}</div>
        </a>
    </MenuItemWrapper>
    );
});

export default memo(SongMenuItem);