// src/views/discover/c-views/recommend/c-cpns/top-ranking/index.tsx
//  榜单组件

import { memo } from 'react';
import type { FC,ReactNode } from 'react';
import { shallowEqual } from 'react-redux';

import AreaHeaderV1 from '@/components/area-header-v1';
import { useAppSelector } from '@/store';

import TopRankingItem from '../top-ranking-item';
import { TopRankingWrapper } from './style';

interface IProps {
    children?: ReactNode;
}

const TopRanking: FC<IProps> = memo((props) => {

    const { rankings=[] } = useAppSelector((state) => ({
        rankings: state.recommend.rankings
    }),shallowEqual);

    return (
        <TopRankingWrapper>
            <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
            <div className="content">
                {
                    rankings.map((item: any) => {
                        return <TopRankingItem key={item.id} itemData={item} />;
                    })
                }
            </div>
        </TopRankingWrapper>
    )
});

export default memo(TopRanking);
