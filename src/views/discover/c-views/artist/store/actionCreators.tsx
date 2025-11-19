import { getArtistList } from '@/service/artist';
import { changeArtistList, changeCurrentArea, changeCurrentType } from './reducer';
import { AppDispatch } from '@/store';

export const changeCurrentAreaAction = (area: number) => {
  return changeCurrentArea(area);
};

export const changeCurrentTypeAction = (type: { name: string; type: number }) => {
  return changeCurrentType(type);
};

export const getArtistListAction = (area: number, type: number, alpha: string | number) => {
  return (dispatch: AppDispatch) => {
    getArtistList(area, type, alpha).then(res => {
      dispatch(changeArtistList(res.artists));
    })
  }
}
