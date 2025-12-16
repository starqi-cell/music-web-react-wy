// src/service/artist.ts
//  歌手相关网络请求

import appRequest from './index';

//  获取歌手分类列表
export function getArtistList(area: number, type: number, initial: string | number) {
  //歌手分类列表
  let url = "/artist/list";
  let params: any = { limit: 100 };
  if (area === -1 && type === 1) {
    //热门歌手
    url = "/top/artists";
  } else {
    if (area === -1) {
      params = { limit: 100, cat: 5001 };
    } else {
      params = {
        type,
        area,
        initial,
        limit: 100
      }
    }
  }

  return appRequest.get({
    url,
    params
  })
}
