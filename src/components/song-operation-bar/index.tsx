import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  .play {
    display: flex;
    align-items: center;
    margin-right: 5px;
    .play-icon {
      display: inline-block;
      height: 31px;
      line-height: 31px;
      background-position: right -428px;
      .play-btn {
        color: #fff;
        display: flex;
        align-items: center;
        padding: 0 7px 0 8px;
        background-position: 0 -387px;
        i {
          display: inline-block;
          width: 20px;
          height: 18px;
          margin: -2px 2px 0;
          background-position: 0 -1622px;
        }
      }
    }
    .add-icon {
      display: inline-block;
      width: 31px;
      height: 31px;
      margin-left: -3px;
      padding-right: 0;
      background-position: 0 -1588px;
      text-indent: -9999px;
    }
  }
  .item {
    display: inline-block;
    height: 31px;
    margin-right: 6px;
    padding-right: 5px;
    background-position: right -1020px;
    
    .icon {
      display: inline-block;
      height: 31px;
      line-height: 31px;
      padding: 0 7px 0 28px;
      font-family: simsun;
    }
    
    .favor-icon {
      background-position: 0 -977px;
    }
    
    .share-icon {
      background-position: 0 -1225px;
    }
    
    .download-icon {
      background-position: 0 -2761px;
    }
    
    .comment-icon {
      background-position: 0 -1465px;
    }
  }
`;

interface IProps {
  favorTitle?: string;
  shareTitle?: string;
  downloadTitle?: string;
  commentTitle?: string;
}

export default memo(function HYSongOperationBar(props: IProps) {
  const { favorTitle = "收藏", shareTitle = "分享", downloadTitle = "下载", commentTitle = "评论" } = props;

  return (
    <Wrapper>
      <span className="play">
        <a href="/#" className="play-icon sprite_button">
          <span className="play-btn sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="/#" className="add-icon sprite_button">+</a>
      </span>
      <a href="/#" className="item sprite_button">
        <span className="icon favor-icon sprite_button">{favorTitle}</span>
      </a>
      <a href="/#" className="item sprite_button">
        <span className="icon share-icon sprite_button">{shareTitle}</span>
      </a>
      <a href="/#" className="item sprite_button">
        <span className="icon download-icon sprite_button">{downloadTitle}</span>
      </a>
      <a href="/#" className="item sprite_button">
        <span className="icon comment-icon sprite_button">{commentTitle}</span>
      </a>
    </Wrapper>
  )
})
