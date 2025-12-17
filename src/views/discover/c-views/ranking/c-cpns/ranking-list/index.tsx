// src/views/discover/c-views/ranking/c-cpns/ranking-list/index.tsx
//  排行榜主列表组件

import { FC,ReactNode,memo } from 'react';
import { shallowEqual } from "react-redux";

import {
  getImageSize,
  formatMinuteSecond,
  formatString
} from "@/utils/format"

import HYThemeHeaderSong from '@/components/theme-header-song';
import {
  RankingListWrapper
} from './style';

import { useAppSelector } from '@/store'

interface IProps {
    children?: ReactNode
}


const RankingList: FC<IProps> = memo((props) => {
  const { playList } = useAppSelector((state) => ({
    playList: state.ranking.playList
  }), shallowEqual);
  const tracks = playList.tracks || [];

  return (
    <RankingListWrapper>
      <HYThemeHeaderSong />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((item: any, index: number) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getImageSize(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className="play sprite_table"></span>
                        <span className="name">{item.name}</span>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{formatString(item.ar.map((ar: any) => ar.name).join("/"))}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})

export default RankingList;