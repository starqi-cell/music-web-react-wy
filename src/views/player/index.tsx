import React, { memo, useMemo } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'

import { useAppSelector } from '@/store'
import { PlayerWrapper, LyricList } from './style'
import { formatTime } from '@/utils/handle-player'

interface IProps {
    children?: ReactNode
}

const Player: FC<IProps> = () => {
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
                    <LyricList>
                        {lyrics.length ? (
                            lyrics.map((item, index) => (
                                <li
                                    key={`${item.time}-${index}`}
                                    className={classNames('lyric-line', { active: index === lyricIndex })}
                                >
                                    {item.content || '......'}
                                </li>
                            ))
                        ) : (
                            <li className="lyric-line empty">暂无歌词信息</li>
                        )}
                    </LyricList>
                </div>
            </div>
        </PlayerWrapper>
    )
}

export default memo(Player)