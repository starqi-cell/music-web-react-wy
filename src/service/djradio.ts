import AppRequest from './index';

export function getDjRadioCatelist() {
  return AppRequest.get({
    url: "/dj/catelist"
  })
}

export function getDjRadioRecommend(type: number) {
  return AppRequest.get({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

export function getDjRadios(cateId: number, limit: number, offset: number) {
  return AppRequest.get({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}
