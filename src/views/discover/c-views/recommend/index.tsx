import React,{memo, useEffect} from 'react';
import type { FC,ReactNode } from 'react';
import { useAppDispatch } from '@/store';
import { fetchBannerDataAction, fetchHotRecommendAction,fetchNewAlbumAction,fetchPlayListDetailAction, fetchSettleSingerAction } from './store/recommand';
import TopBanner from './c-cpns/top-banner';
import { RecommendWrapper } from './style';
import HotRecommend from './c-cpns/hot-recomend';
import NewAlbum from './c-cpns/new-album';
import TopRanking from './c-cpns/top-ranking';
import UserLogin from './c-cpns/user-login';
import HotAnchor from './c-cpns/hot-anchor';
import SettleSinger from './c-cpns/settle-singer';

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

export default memo(Recommend);