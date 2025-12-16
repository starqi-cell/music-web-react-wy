// src/service/ranking.ts
//  排行榜相关网络请求

import appRequest from './index';

// 获取所有榜单
export function getTopList() {
  return appRequest.get({
    // 所有榜单
    url: "/toplist"
  })
}

// 获取歌单详情
export function getRankingList(id: number) {
  return appRequest.get({
    // 歌单详情
    url: "/playlist/detail",
    params: {
      id
    }
  })
}
