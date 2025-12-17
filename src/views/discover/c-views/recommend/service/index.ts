//  src/views/discover/c-views/recommend/service/index.ts
//  推荐页面相关网络请求

import AppRequest from "@/service";

export function getTopRadios(limit=5){
    return AppRequest.get({
        url:"/dj/toplist",
        params:{
            limit: limit+1
        }
    });
}

export function getBanners(){
    return AppRequest.get({
        url:"/banner"
    });
}

export function getHotRecommend(limit=30){
    return AppRequest.get({
        url:"/personalized",
        params: {
            limit
        }
    });
}

export function getNewAlbum(){
    return AppRequest.get({
        url:"/album/newest",
    });
}

export function getPlayListDetail(id:number){
    return AppRequest.get({
        url:`/playlist/detail`,
        params:{
            id
        }
    });
}

export function getSettleSinger(limit=5){
    return AppRequest.get({
        url:"/artist/list",
        params:{
            limit
        }
    });
}