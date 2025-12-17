// src/views/discover/c-views/recommend/c-cpns/settle-singer/index.tsx
//  入驻歌手组件

import { memo } from 'react';
import type { FC,ReactNode } from 'react';
import { SettleSingerWrapper } from './style';
import AreaHeaderV2 from '@/components/area-header-v2';
import { useAppSelector } from '@/store';
import { getImageSize } from '@/utils/format';

interface IProps {
    children?: ReactNode;
}

const SettleSinger: FC<IProps> = memo((props) => {

    const { settleSingers } =useAppSelector((state)=>({
        settleSingers:state.recommend.settleSingers
    }))

    return (
        <SettleSingerWrapper>
            <AreaHeaderV2 title="入驻歌手" moreText="查看全部 &gt;" moreLink="#/discover/artist" />
            <div className="artists">
                {
                    settleSingers.map((item) => {
                        return (
                            <a href='#discover/artist' className='item' key={item.id}>
                                <img src={getImageSize(item.picUrl, 62)} alt={item.name} />
                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="alias">{item.alias && item.alias.join(' ')}</div>
                                </div>
                            </a>
                        )
                })}
            </div>
            <div className="apply-for">
                <a href="#/apply/artist">申请成为网易音乐人</a>
            </div>
        </SettleSingerWrapper>
    );
});

export default SettleSinger;