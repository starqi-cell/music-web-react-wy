// src/service/djradio.ts
//  电台相关网络请求

import appRequest from './index';

//  获取电台分类
export function getDjRadioCatelist() {
  return appRequest.get({
    // 电台-分类
    url: "/dj/catelist"
  })
}

//  获取推荐电台类型
export function getDjRadioRecommend(type: number) {
  return appRequest.get({
    // 电台-推荐类型
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

//  获取热门电台
export function getDjRadios(cateId: number, limit: number, offset: number) {
  return appRequest.get({
    // 电台-类别热门电台
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}
