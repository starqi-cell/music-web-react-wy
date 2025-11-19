import hyRequest from './index';

export function getTopList() {
  return hyRequest.get({
    url: "/toplist"
  })
}

// 获取榜单详情
export function getRankingList(id: number) {
  return hyRequest.get({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}
