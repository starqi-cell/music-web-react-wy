// src/views/player/style.ts
//  播放器页面样式文件

import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  min-height: 560px;
  background: #f7f7f7;
  padding: 48px 0;

  .content {
    display: flex;
    gap: 36px;
    padding: 32px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.04);
  }

  .cover img {
    width: 220px;
    height: 220px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #222;
  }

  .meta {
    color: #666;
    margin-bottom: 4px;
  }

  .description {
    margin-top: 12px;
    color: #444;
  }
`

export const LyricWrapper = styled.div`
  flex: 1;
  margin-top: 24px;
  height: 360px; 
  overflow: hidden; 
  position: relative;
  mask-image: linear-gradient(180deg, transparent 0%, #000 10%, #000 90%, transparent 100%);
`

export const LyricList = styled.ul`
  width: 100%;
  text-align: center;
  list-style: none;
  padding: 0;
  margin: 0;

  transition: transform 0.4s ease-out;

  .lyric-line {
    height: 32px;
    line-height: 32px;
    
    color: #989898;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.3s;
  }

  .lyric-line.active {
    color: #c20c0c;
    font-weight: 600;
    font-size: 16px; 
  }

  .lyric-line.empty {
    color: #999;
    margin-top: 100px;
  }
`