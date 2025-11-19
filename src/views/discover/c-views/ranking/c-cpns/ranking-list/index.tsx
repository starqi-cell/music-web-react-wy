import React, { FC,ReactNode,memo } from 'react';
import { useSelector, shallowEqual } from "react-redux";

import {
  getSizeImage,
  formatMinuteSecond
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
                            (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className="play sprite_table"></span>
                        <span className="name">{item.name}</span>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
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

export default memo(RankingList);