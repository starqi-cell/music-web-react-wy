// src/views/discover/c-views/recommend/c-cpns/hot-anchor/index.tsx
//  热门主播组件

import { memo } from 'react';
import type { FC,ReactNode } from 'react';
import AreaHeaderV2 from '@/components/area-header-v2';
import { useAppSelector,appShallowEqual } from '@/store';
import { HotAnchorWrapper } from './style'


interface IProps {
    children?: ReactNode;
}

const HotAnchor: FC<IProps> = memo((props) => {

    const { hotRadios=[] } = useAppSelector((state)=>({
        hotRadios:state.recommend.topRadios
    }),appShallowEqual);


    return (
        <HotAnchorWrapper>
            <AreaHeaderV2 title="热门电台"/>
            <div className="anchors">
                {
                    hotRadios.map(item=>{
                        return (
                            <div className="item">
                                <a href="" className='image'>
                                    <img src={item.picUrl} alt={item.name} />
                                </a>
                                <div className="info">
                                    <div className="name">{item.name}</div>
                                    <div className="desc">{item.rcmdtext}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </HotAnchorWrapper>
    );
});

export default HotAnchor;