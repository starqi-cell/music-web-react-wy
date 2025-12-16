import React, {FC,ReactNode,memo} from 'react';
import { useSelector, shallowEqual } from "react-redux";

import { formatMonthDay } from "@/utils/format";

import SongOperationBar from '@/components/song-operation-bar';
import {
  RankingHeaderWrapper
} from './style';

import { useAppSelector } from '@/store'

interface IProps {
    children?: ReactNode
}


const RankingHeader: FC<IProps> = memo((props) => {
  // redux
  const state = useAppSelector((state) => ({
    playList: state.ranking.playList,
  }), shallowEqual);
  const topInfo = state.playList;

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={topInfo.coverImgUrl} alt="" />
        <span className="image_cover"></span>
      </div>
      <div className="info">
        <div className="title">{topInfo.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(topInfo.updateTime)}</div>
          <div className="update-f">（{"每日更新"}）</div>
        </div>
        <SongOperationBar favorTitle={`(${topInfo.subscribedCount})`}
                            shareTitle={`(${topInfo.shareCount})`}
                            downloadTitle="下载"
                            commentTitle={`(${topInfo.commentCount})`}/>
      </div>
    </RankingHeaderWrapper>
  )
})

export default memo(RankingHeader)
