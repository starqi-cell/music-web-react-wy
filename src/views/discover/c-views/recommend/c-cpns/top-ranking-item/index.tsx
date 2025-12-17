// src/views/discover/c-views/recommend/c-cpns/top-ranking-item/index.tsx
// 榜单项组件

import { memo } from 'react';
import type { FC,ReactNode } from 'react';
import { TopRankingItemWrapper } from './style';
import { getImageSize } from '@/utils/format';
import { useAppDispatch } from '@/store';
import { fetchCurrentSongDataAction } from '@/views/player/store/player';

interface IProps {
    children?: ReactNode;
    itemData: any;
}

const TopRankingItem: FC<IProps> = memo((props) => {

    const { itemData } = props;
    const { tracks=[] } = itemData; 
    
    const dispatch = useAppDispatch();

    function handlePlaySong(id?: number) {
        if (!id) return;
        dispatch(fetchCurrentSongDataAction(id));
    }

    return (
    <TopRankingItemWrapper>
        <div className="header">
            <div className="image">
                <img src={getImageSize(itemData.coverImgUrl,80)}></img>
                <a href="" className="cover sprite_cover"></a>
            </div>
            <div className="info">
                <div className="name">{itemData.name}</div>
                <div>
                    <button className="sprite_02 btn play" onClick={() => handlePlaySong(tracks[0]?.id)}></button>
                    <button className="sprite_02 btn favor"></button>
                </div>
            </div>
        </div>
        <div className="list">
            {
                tracks.slice(0,10).map((item: any, index: number) => {
                    return (
                        <div key={item.id} className="list-item">
                            <div className="rank">{index + 1}</div>
                            <div className="info">
                                <div className="name" onDoubleClick={() => handlePlaySong(item.id)}>{item.name}</div>
                                <div className="operate">
                                    <button className="btn sprite_02 play" onClick={() => handlePlaySong(item.id)}></button>
                                    <button className="btn sprite_icon2 addto"></button>
                                    <button className="btn sprite_02 favor"></button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
        <div className="footer">
            <a href="#/discover/ranking">查看全部 &gt;</a>
        </div>
    </TopRankingItemWrapper>);
});

export default memo(TopRankingItem);