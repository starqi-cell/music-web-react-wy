// src/views/player/app-player-bar/index.tsx
//  底部播放器组件

import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { Slider } from 'antd'

import { formatTime } from '@/utils/handle-player'
import { BarControl, BarOperator, BarPlayInfo, BarWrapper } from './style'
import { usePlayer } from './hooks/usePlayer' 

interface IProps {
  children?: ReactNode
}

const AppPlayerBar: FC<IProps> = () => {
  const {
    audioRef,
    isPlaying,
    currentTime,
    duration,
    progress,
    playMode,
    currentSong,
    handleTimeUpdate,
    handlePlayEnded,
    handleSliderChange,
    handleLoadedMetadata,
    togglePlay,
    changeSong,
    changeMode
  } = usePlayer()

  const singerName = (currentSong?.ar ?? []).map((item: any) => item.name).join(' / ')
  const coverUrl = currentSong?.al?.picUrl
    ? `${currentSong.al.picUrl}?param=34y34`
    : 'https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=34y34'

  return (
    <BarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        {/* 1. 左侧播放控制 */}
        <BarControl isPlaying={isPlaying}>
          <button
            className="btn sprite_playbar prev"
            onClick={() => changeSong(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={togglePlay}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => changeSong(true)}
          ></button>
        </BarControl>

        {/* 2. 中间播放信息 (封面、进度) */}
        <BarPlayInfo>
          <NavLink to="/discover/player">
            <img src={coverUrl} alt={currentSong.name ?? '歌曲封面'} />
          </NavLink>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name ?? '未选择歌曲'}</span>
              <span className="singer-name">{singerName || '未知歌手'}</span>
            </div>
            <div className="progress">
              <Slider
                step={0.5}
                value={progress}
                onChange={handleSliderChange}
                tooltip={{ formatter: null }}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </BarPlayInfo>

        {/* 3. 右侧操作按钮 (音量、循环、播放列表) */}
        <BarOperator playMode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              onClick={changeMode}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>

      {/* 4. 隐藏的 Audio 元素 */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handlePlayEnded}
        onLoadedMetadata={handleLoadedMetadata}
        preload="auto"
      />
    </BarWrapper>
  )
}

export default memo(AppPlayerBar)