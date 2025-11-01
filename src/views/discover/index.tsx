import React,{ memo,Suspense } from 'react';
import type { FC,ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

interface IProps {
    children?: ReactNode;
}

const Discover: FC<IProps> = memo((props) => {

    return (
    <div>
        <div>
            <Link to="/discover/recommand">推荐</Link>
            <Link to="/discover/ranking">排行榜</Link>
            <Link to="/discover/songs">歌曲</Link>
            <Link to="/discover/djradio">主播电台</Link>
            <Link to="/discover/artist">歌手</Link>
            <Link to="/discover/album">新碟上架</Link>
        </div>
        <Suspense fallback={<div>loading...</div>}>
            <Outlet />
        </Suspense>
    </div>
    )
});

export default memo(Discover);