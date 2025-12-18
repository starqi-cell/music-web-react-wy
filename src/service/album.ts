// src/service/album.ts
//  专辑相关网络请求

import appRequest from './index';

//  获取最新专辑
export function getHotAlbums() {
  return appRequest.get({
    //最新专辑
    url: "/album/newest"
  })
}

//  新碟上架
export function getTopAlbums(limit: number, offset: number) {
  return appRequest.get({
    //新碟上架
    url: "/album/newest",
    params: {
      limit,
      offset
    }
  })
}
