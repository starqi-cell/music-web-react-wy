import React,{memo} from 'react';
import type { FC,ReactNode } from 'react';
import TopRankingItem from '../top-ranking-item';
import { TopRankingWrapper } from './style';
import AreaHeaderV1 from '@/components/area-header-v1';
import { useAppSelector } from '@/store';
import { shallowEqual } from 'react-redux';

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
