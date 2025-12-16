// src/service/songs.ts
//  歌单相关网络请求

import appRequest from './index';

//  获取歌单分类
export function getSongCategory() {
  return appRequest.get({
    // 歌单分类
    url: "/playlist/catlist"
  })
}

//  获取歌单列表
export function getSongCategoryList(cat: string = "全部", offset: number = 0, limit: number = 35) {
  return appRequest.get({
    // 歌单网友精选
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}
