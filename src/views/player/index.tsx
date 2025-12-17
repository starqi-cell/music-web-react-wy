// src/views/player/index.tsx
//  播放器页面组件

import { memo, useMemo, useRef, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'

import { useAppSelector } from '@/store'
import { formatTime } from '@/utils/handle-player'

import { PlayerWrapper, LyricList, LyricWrapper } from './style' 


interface IProps {
  children?: ReactNode
}

const Player: FC<IProps> = memo(() => {

  const { currentSong, lyrics, lyricIndex } = useAppSelector((state) => ({
    currentSong: state.player.currentSong,
    lyrics: state.player.lyrics,
    lyricIndex: state.player.lyricIndex
  }))

  const singerName = useMemo(() => {
    return (currentSong?.ar ?? [])
      .map((item: any) => item.name)
      .join(' / ')
  }, [currentSong])

  const coverUrl = useMemo(() => {
    const pic = currentSong?.al?.picUrl
    if (pic) return `${pic}?param=260y260`
    return 'https://p2.music.126.net/OVkXDNmbk2uj6wE1KTZIwQ==/109951165203334337.jpg?param=260y260'
  }, [currentSong])

  const lyricListRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!lyricListRef.current) return
    const itemHeight = 32 
    const wrapperHeight = 360
    let scrollY = lyricIndex * itemHeight - wrapperHeight / 2 + itemHeight / 2
    if (scrollY < 0) {
      scrollY = 0
    }
    lyricListRef.current.style.transform = `translateY(-${scrollY}px)`
  }, [lyricIndex]) 

  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <div className="cover">
          <img src={coverUrl} alt={currentSong?.name ?? '歌曲封面'} />
        </div>
        <div className="info">
          <h2 className="title">{currentSong?.name ?? '未选择歌曲'}</h2>
          <div className="meta">歌手：{singerName || '未知歌手'}</div>
          <div className="meta">专辑：{currentSong?.al?.name ?? '--'}</div>
          <div className="meta">时长：{formatTime(currentSong?.dt ?? 0)}</div>
          <LyricWrapper>
            <LyricList ref={lyricListRef}>
              {lyrics.length ? (
                lyrics.map((item, index) => (
                  <li
                    key={`${item.time}-${index}`}
                    className={classNames('lyric-line', { active: index === lyricIndex })}
                  >
                    {item.content || ''}
                  </li>
                ))
              ) : (
                <li className="lyric-line empty">暂无歌词信息</li>
              )}
            </LyricList>
          </LyricWrapper>

        </div>
      </div>
    </PlayerWrapper>
  )
})

export default Player