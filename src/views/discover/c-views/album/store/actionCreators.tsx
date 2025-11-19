import { getHotAlbums, getTopAlbums } from '@/service/album';
import { changeHotAlbums, changeTopAlbums, changeTopTotal } from './reducer';
import { AppDispatch } from '@/store';

export const getHotAlbumsAction = () => {
  return (dispatch: AppDispatch) => {
    getHotAlbums().then(res => {
      dispatch(changeHotAlbums(res.albums));
    })
  }
}

export const getTopAlbumsAction = (page: number) => {
  return (dispatch: AppDispatch) => {
    getTopAlbums(30, (page - 1) * 30).then(res => {
      dispatch(changeTopAlbums(res.albums));
      dispatch(changeTopTotal(res.total));
    })
  }
}
