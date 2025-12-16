import AppRequest from './index';

export function getTopList() {
  return AppRequest.get({
    url: "/toplist"
  })
}

// 获取榜单详情
export function getRankingList(id: number) {
  return AppRequest.get({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}
