import hyRequest from './index';

export function getHotAlbums() {
  return hyRequest.get({
    url: "/album/newest"
  })
}

export function getTopAlbums(limit: number, offset: number) {
  return hyRequest.get({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}
