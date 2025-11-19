import hyRequest from './index';

export function getDjRadioCatelist() {
  return hyRequest.get({
    url: "/dj/catelist"
  })
}

export function getDjRadioRecommend(type: number) {
  return hyRequest.get({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

export function getDjRadios(cateId: number, limit: number, offset: number) {
  return hyRequest.get({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}
