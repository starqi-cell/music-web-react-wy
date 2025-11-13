import React,{memo} from 'react';
import type { FC,ReactNode } from 'react';
import { HotAnchorWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2';
import { hotRadios } from '@/assets/data/local-data';

interface IProps {
    children?: ReactNode;
}

const HotAnchor: FC<IProps> = memo((props) => {

    return (
        <HotAnchorWrapper>
            <AreaHeaderV2 title="热门主播"/>
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
                                    <div className="desc">{item.position}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </HotAnchorWrapper>
    );
});

export default memo(HotAnchor);