// src/views/player/service/player.ts
//  播放器页面服务文件                                   

import AppRequest from '@/service'

export function getSongDetail(ids: number) {
  return AppRequest.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSongLyric(id: number) {
  return AppRequest.get({
    url: '/lyric',
    params: {
      id
    }
  })
}

export function getSongPlayUrl(id: number) {
  return AppRequest.get({
    url: '/song/url',
    params: {
      id
    }
  })
}
