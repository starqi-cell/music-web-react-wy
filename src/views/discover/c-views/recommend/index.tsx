import React,{memo, useEffect} from 'react';
import type { FC,ReactNode } from 'react';
import { useAppDispatch } from '@/store';
import { fetchBannerDataAction, fetchHotRecommendAction } from './store/index';
import TopBanner from './c-cpns/top-banner';
import { RecommendWrapper } from './style';
import HotRecommend from './c-cpns/hot-recomend';

interface IProps {
    children?: ReactNode;
}

const Recommend: FC<IProps> = memo((props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBannerDataAction());
        dispatch(fetchHotRecommendAction());
    }, []);

    return (
        <RecommendWrapper>
            <TopBanner />
            <div className="content wrap-v2">
                <div className="left">
                    <HotRecommend />
                </div>
                <div className="right">right</div>
            </div>
        </RecommendWrapper>
    );
});

export default memo(Recommend);