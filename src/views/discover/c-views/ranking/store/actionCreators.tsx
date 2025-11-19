import { 
  changeTopList, 
  changeCurrentIndex, 
  changePlayList 
} from "./reducer";

import { 
  getTopList,
  getRankingList
} from "@/service/ranking";

export { changeCurrentIndex };

export const getTops = () => {
  return (dispatch: any) => {
    getTopList().then(res => {
      dispatch(changeTopList(res.list));
    })
  }
}

export const getRanking = (id: number) => {
  return (dispatch: any) => {
    getRankingList(id).then((res: any) => {
      dispatch(changePlayList(res.playlist))
    })
  }
}

