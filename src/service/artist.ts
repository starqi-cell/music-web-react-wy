import hyRequest from './index';

export function getArtistList(area: number, type: number, initial: string | number) {
  let url = "/artist/list";
  let params: any = { limit: 100 };
  if (area === -1 && type === 1) {
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

  return hyRequest.get({
    url,
    params
  })
}
