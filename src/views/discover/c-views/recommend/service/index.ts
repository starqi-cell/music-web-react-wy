import AppRequest from "@/service";
import { url } from "inspector";

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