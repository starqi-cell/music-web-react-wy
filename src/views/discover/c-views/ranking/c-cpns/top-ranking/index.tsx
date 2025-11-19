import React, { FC,ReactNode,useEffect, memo } from 'react';
import classNames from "classnames";
import { useDispatch, shallowEqual } from "react-redux";

import { getSizeImage } from "@/utils/format";
import {
  changeCurrentIndex,
  getRanking
} from "../../store/actionCreators"

import {
  TopRankingWrapper
} from "./style";

import { useAppSelector } from '@/store'



interface IProps {
    children?: ReactNode
}


const TopRanking: FC<IProps> = memo((props) => {
  // redux
  const { topList, currentIndex } = useAppSelector((state) => ({
    topList: state.ranking.topList,
    currentIndex: state.ranking.currentIndex
  }), shallowEqual);
  const dispatch = useDispatch<any>();

  // hooks
  useEffect(() => {
    const id = (topList[currentIndex] && topList[currentIndex].id);
    if (!id) return;
    dispatch(getRanking(id))
  }, [topList, dispatch, currentIndex])

  // handle function
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
                onClick={e => hanldeItemClick(index)}>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
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

export default memo(TopRanking)