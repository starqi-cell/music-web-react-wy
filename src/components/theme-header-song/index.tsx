//  src/components/theme-header-song/index.tsx
//  歌曲列表主题头部组件

import { memo } from 'react';
import type { FC,ReactNode } from 'react';
import { HeaderWrapper } from './style';


interface IProps {
    children?: ReactNode;
    songsNums?: number;
    playCount?: number;
}

const ThemeHeaderSong: FC<IProps> = memo((props) => {

  const { songsNums=100, playCount=75487 } = props;

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{songsNums}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
});

export default ThemeHeaderSong;