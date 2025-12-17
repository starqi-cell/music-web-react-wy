// src/views/discover/c-views/ranking/c-cpns/top-ranking/index.tsx
//  排行榜左侧排行榜列表组件

import { FC,ReactNode,useEffect, memo } from 'react';
import classNames from "classnames";
import { shallowEqual } from "react-redux";

import { useAppSelector,useAppDispatch } from '@/store'
import { getImageSize } from "@/utils/format";

import {
  changeCurrentIndex,
  getRanking
} from "../../store/ranking";

import {
  TopRankingWrapper
} from "./style";

interface IProps {
    children?: ReactNode
}

const TopRanking: FC<IProps> = memo((props) => {

  const { topList, currentIndex } = useAppSelector((state) => ({
    topList: state.ranking.topList,
    currentIndex: state.ranking.currentIndex
  }), shallowEqual);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const id = (topList[currentIndex] && topList[currentIndex].id);
    if (!id) return;
    dispatch(getRanking(id))
  }, [topList, dispatch, currentIndex])

  const hanldeItemClick = (index: number) => {
    dispatch(changeCurrentIndex(index));
    const id = topList[currentIndex].id;
    dispatch(getRanking(id))
  }

  return (
    <TopRankingWrapper>
      {
        topList.map((item: any, index: any) => {
          let header;
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={classNames("item", { "active": index === currentIndex })}
                onClick={() => hanldeItemClick(index)}>
                <img src={getImageSize(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </TopRankingWrapper>
  )
})

export default TopRanking