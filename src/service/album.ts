import AppRequest from './index';

export function getHotAlbums() {
  return AppRequest.get({
    url: "/album/newest"
  })
}

export function getTopAlbums(limit: number, offset: number) {
  return AppRequest.get({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}
