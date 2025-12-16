//  src/components/song-operation-bar/index.tsx
//  歌曲操作栏组件

import { memo } from 'react';
import type { FC,ReactNode } from 'react';

import { Wrapper } from './style';

interface IProps {
    children?: ReactNode;
    favorTitle?: string;
    shareTitle?: string;
    downloadTitle?: string;
    commentTitle?: string;
}

const SongOperationBar: FC<IProps> = memo((props) => {
  const { favorTitle = "收藏", shareTitle = "分享", downloadTitle = "下载", commentTitle = "评论" } = props;

  return (
    <Wrapper>
      <span className="play">
        <a href="/#" className="sprite_button play-icon">
          <span className="sprite_button play-btn">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="/#" className="sprite_button add-icon">+</a>
      </span>
      <a href="/#" className="sprite_button item">
        <span className="icon favor-icon sprite_button">{favorTitle}</span>
      </a>
      <a href="/#" className="sprite_button item">
        <span className="icon share-icon sprite_button">{shareTitle}</span>
      </a>
      <a href="/#" className="sprite_button item">
        <span className="icon download-icon sprite_button">{downloadTitle}</span>
      </a>
      <a href="/#" className="sprite_button item">
        <span className="icon comment-icon sprite_button">{commentTitle}</span>
      </a>
    </Wrapper>
  )
});

export default SongOperationBar;