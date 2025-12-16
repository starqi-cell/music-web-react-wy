import AppRequest from './index';

export function getSongCategory() {
  return AppRequest.get({
    url: "/playlist/catlist"
  })
}

export function getSongCategoryList(cat: string = "全部", offset: number = 0, limit: number = 35) {
  return AppRequest.get({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}
