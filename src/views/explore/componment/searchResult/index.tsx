

import { memo, useEffect, useRef, useState, useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import { useAppSelector } from '@/store';
import { ResultWrapper } from './style';
import { PlayCircleOutlined } from '@ant-design/icons';
import { formatMinuteSecond } from '@/utils/format';
import { Song, Artist } from '../../type';
import { useAppDispatch } from '@/store';
import { fetchCurrentSongDataAction } from '@/views/player/store/player';

interface IProps {
    children?: ReactNode;
}

const ITEM_HEIGHT = 80;
const VISIBLE_COUNT = 20;

const SearchResult: FC<IProps> = memo((props) => {
    const dispatch = useAppDispatch();
    const { songs, songCount } = useAppSelector((state) => state.search);
    
    // 虚拟列表状态
    const [range, setRange] = useState({ start: 0, end: VISIBLE_COUNT });
    
    const observerRef = useRef<IntersectionObserver | null>(null);
    const topSentinelRef = useRef<HTMLDivElement>(null);
    const bottomSentinelRef = useRef<HTMLDivElement>(null);

    // 当 songs 变化时重置
    useEffect(() => {
        setRange({ start: 0, end: VISIBLE_COUNT });
    }, [songs]);

    function handlePlaySong(id?: number) {
        if (!id) return;
        dispatch(fetchCurrentSongDataAction(id));
        console.log('播放歌曲ID:', id);
    }

    // 监听逻辑
    useEffect(() => {
        if (!songs || songs.length === 0) return;
        
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === topSentinelRef.current) {
                        setRange(prev => {
                            const newStart = Math.max(0, prev.start - 5);
                            const newEnd = Math.min(songs.length, newStart + VISIBLE_COUNT);
                            return { start: newStart, end: newEnd };
                        });
                    } else if (entry.target === bottomSentinelRef.current) {
                        setRange(prev => {
                            const newStart = Math.min(Math.max(0, songs.length - VISIBLE_COUNT), prev.start + 5);
                            const newEnd = Math.min(songs.length, newStart + VISIBLE_COUNT);
                            return { start: newStart, end: newEnd };
                        });
                    }
                }
            });
        }, {
             root: null,
             rootMargin: '100px 0px', 
             threshold: 0
        });

        const observer = observerRef.current;
        if (topSentinelRef.current) observer.observe(topSentinelRef.current);
        if (bottomSentinelRef.current) observer.observe(bottomSentinelRef.current);

        return () => {
             if (observer) observer.disconnect();
        };
    }, [songs]); 

    const visibleSongs = useMemo(() => {
        return songs ? songs.slice(range.start, range.end) : [];
    }, [songs, range]);


    if(!songs || songs.length === 0) {
        return (
            <ResultWrapper>
                <div className="empty-state">
                    如果在上方输入关键词，结果会显示在这里...
                </div>
            </ResultWrapper>
        )
    }

    const totalHeight = songs.length * ITEM_HEIGHT;
    const offsetY = range.start * ITEM_HEIGHT;

    // 修复数据字段读取错误 (al -> album 是错误的，应该是 al)
    // 根据 context 中 type 定义： Song { al: Album, ... }
    
    return ( 
        <ResultWrapper>
            <div className="result-header">
                <h3>搜索结果 <span>找到了 {songCount} 首歌曲</span></h3>
            </div>
            
            <div className="song-list" style={{ position: 'relative', height: totalHeight }}>
                 {/* 绝对定位的视口容器 */}
                 <div style={{ position: 'absolute', top: offsetY, width: '100%' }}>
                    
                    {/* 顶部哨兵 */}
                    <div ref={topSentinelRef} style={{ position: 'absolute', top: 0, height: '20px', width: '100%', transform: 'translateY(-100%)' }}></div>

                    {visibleSongs.map((result: Song) => (
                        <div className="song-item" key={result.id} style={{ height: '70px', marginBottom: '10px' }} onDoubleClick={()=>handlePlaySong(result.id)}>
                            <div className="info">
                                <div className="name">
                                    {result.name}
                                    {result.alia && result.alia.length > 0 && (
                                        <span className="alias">({result.alia[0]})</span>
                                    )}
                                </div>
                                <div className="details">
                                    <span>{result.artists?.map((artist: Artist) => artist.name).join(' / ')}</span>
                                    <span className="album"> - 《{result.album?.name}》</span>
                                </div>
                            </div>
                            <div className="duration">
                                {formatMinuteSecond(result.duration)}
                            </div>
                            <div className="action" onClick={() => handlePlaySong(result.id)}>
                                <PlayCircleOutlined className="play-icon" />
                            </div>
                        </div>
                    ))}
                    
                    {/* 底部哨兵 */}
                    <div ref={bottomSentinelRef} style={{ position: 'absolute', bottom: 0, height: '20px', width: '100%', transform: 'translateY(100%)' }}></div>
                </div>
            </div>
        </ResultWrapper>
    );
});


export default SearchResult;

