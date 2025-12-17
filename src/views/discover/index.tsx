// src/views/discover/index.tsx
//  发现音乐页面

import { memo,Suspense } from 'react';
import type { FC,ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './c-cpns/nva-bar';

interface IProps {
    children?: ReactNode;
}

const Discover: FC<IProps> = memo((props) => {

    return (
    <div>
        <NavBar />
        <Suspense fallback={<div>loading...</div>}>
            <Outlet />
        </Suspense>
    </div>
    )
});

export default memo(Discover);