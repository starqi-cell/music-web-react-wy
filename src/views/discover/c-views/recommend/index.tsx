import React,{memo, useEffect} from 'react';
import type { FC,ReactNode } from 'react';
import { useAppDispatch } from '@/store';
import { fetchBannerDataAction } from './store/index';
import TopBanner from './c-cpns/top-banner';

interface IProps {
    children?: ReactNode;
}

const Recommend: FC<IProps> = memo((props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBannerDataAction());
    }, []);

    return (
        <div>
            <TopBanner />
            Recommend
        </div>
    );
});

export default memo(Recommend);