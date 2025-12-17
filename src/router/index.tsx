//  src/router/index.tsx
//  路由配置文件

import React from 'react';
import { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Discover = React.lazy(() => import('@/views/discover'));
const Focus = React.lazy(() => import('@/views/focus'));
const Mine = React.lazy(() => import('@/views/mine'));
const Player = React.lazy(() => import('@/views/player'));
const NotFound = React.lazy(() => import('@/views/not-found'));
const Login = React.lazy(() => import('@/views/user-login'));

const Artist = React.lazy(() => import('@/views/discover/c-views/artist'));
const Djradio = React.lazy(() => import('@/views/discover/c-views/djradio'));
const Ranking = React.lazy(() => import('@/views/discover/c-views/ranking'));
const Recommand = React.lazy(() => import('@/views/discover/c-views/recommend'));
const Songs = React.lazy(() => import('@/views/discover/c-views/songs'));
const Album = React.lazy(() => import('@/views/discover/c-views/album'));

const routes:RouteObject[]=[
    {
        path:'/',
        element:<Navigate to='/discover' replace />
    },
    {
        path:'/discover',
        element:<Discover />,
        children:[
            {
                index:true,
                element:<Recommand />
            },
            {
                path:'artist',
                element:<Artist />
            },
            {
                path:'djradio',
                element:<Djradio />
            },
            {
                path:'ranking',
                element:<Ranking />
            },
            {
                path:'recommend',
                element:<Recommand />
            },
            {
                path:'songs',
                element:<Songs />
            },
            {
                path:'album',
                element:<Album />
            },
            {
                path:'player',
                element:<Player />
            },
            {
                path:'*',
                element:<NotFound />
            }
        ]
    },
    {
        path:'/focus',
        element:<Focus />
    },
    {
        path:'/mine',
        element:<Mine />
    },
    {
        path:'/user/login',
        element:<Login />
    },
    {
        path:'*',
        element:<NotFound />
    }
];

export default routes;