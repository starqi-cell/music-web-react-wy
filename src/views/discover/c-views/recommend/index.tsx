import React,{memo, useEffect} from 'react';
import type { FC,ReactNode } from 'react';
import { useAppDispatch } from '@/store';
import { fetchBannerDataAction, fetchHotRecommendAction,fetchNewAlbumAction,fetchPlayListDetailAction } from './store/index';
import TopBanner from './c-cpns/top-banner';
import { RecommendWrapper } from './style';
import HotRecommend from './c-cpns/hot-recomend';
import NewAlbum from './c-cpns/new-album';
import TopRanking from './c-cpns/top-ranking';

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
                <div className="right">right</div>
            </div>
        </RecommendWrapper>
    );
});

export default memo(Recommend);