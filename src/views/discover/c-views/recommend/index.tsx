//  src/views/discover/c-views/recommend/index.tsx
//  推荐页面

import { memo, useEffect } from 'react';
import type { FC,ReactNode } from 'react';

import { useAppDispatch } from '@/store';
import { fetchTopRadiosAction,fetchBannerDataAction, fetchHotRecommendAction,fetchNewAlbumAction,fetchPlayListDetailAction, fetchSettleSingerAction } from './store/recommand';

import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recomend';
import NewAlbum from './c-cpns/new-album';
import TopRanking from './c-cpns/top-ranking';
import UserLogin from '../../../user-login';
import HotAnchor from './c-cpns/hot-anchor';
import SettleSinger from './c-cpns/settle-singer';
import { RecommendWrapper } from './style';
interface IProps {
    children?: ReactNode;
}

const Recommend: FC<IProps> = memo((props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBannerDataAction());
        dispatch(fetchHotRecommendAction());
        dispatch(fetchNewAlbumAction());
        dispatch(fetchPlayListDetailAction());
        dispatch(fetchSettleSingerAction());
        dispatch(fetchTopRadiosAction());
    }, []);

    return (
        <RecommendWrapper>
            <TopBanner />
            <div className="content wrap-v2">
                <div className="left">
                    <HotRecommend />
                    <NewAlbum />
                    <TopRanking />
                </div>
                <div className="right">
                    <UserLogin />
                    <SettleSinger />
                    <HotAnchor />
                </div>
            </div>
        </RecommendWrapper>
    );
});

export default Recommend;