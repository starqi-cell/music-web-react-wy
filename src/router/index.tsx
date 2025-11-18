import React from 'react';
import { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Discover = React.lazy(() => import('@/views/discover'));
const Download = React.lazy(() => import('@/views/download'));
const Focus = React.lazy(() => import('@/views/focus'));
const Mine = React.lazy(() => import('@/views/mine'));
const Player = React.lazy(() => import('@/views/player'));

const Artist = React.lazy(() => import('@/views/discover/c-views/artist'));
const Djradio = React.lazy(() => import('@/views/discover/c-views/djradio'));
const Ranking = React.lazy(() => import('@/views/discover/c-views/ranking'));
const Recommand = React.lazy(() => import('@/views/discover/c-views/recommend'));
const Songs = React.lazy(() => import('@/views/discover/c-views/songs'));
const Album = React.lazy(() => import('@/views/discover/c-views/album'));

const routes:RouteObject[]=[
    {
        path:'/',
        element:<Navigate to='/discover' />
    },
    {
        path:'/discover',
        element:<Discover />,
        children:[
            {
                path:'/discover',
                element:<Navigate to="/discover/recommend" />
            },
            {
                path:'/discover/artist',
                element:<Artist />
            },
            {
                path:'/discover/djradio',
                element:<Djradio />
            },
            {
                path:'/discover/ranking',
                element:<Ranking />
            },
            {
                path:'/discover/recommend',
                element:<Recommand />
            },
            {
                path:'/discover/songs',
                element:<Songs />
            },
            {
                path:'/discover/album',
                element:<Album />
            },
            {
                path:'/discover/player',
                element:<Player />
            }
        ]
    },
    {
        path:'/download',
        element:<Download />
    },
    {
        path:'/focus',
        element:<Focus />
    },
    {
        path:'/mine',
        element:<Mine />
    }
];

export default routes;