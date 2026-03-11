
import styled from 'styled-components';

export const ResultWrapper = styled.div`
  .result-header {
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 1px solid #e1e1e1;
      
      span {
          font-size: 12px;
          color: #999;
          margin-left: 10px;
      }
  }

  .song-list {
      display: flex;
      flex-direction: column;
      /* gap: 10px;  移除 gap，改用 margin-bottom 以便于计算高度 */
      position: relative; /* 确保定位准确 */
  }

  .song-item {
      display: flex;
      align-items: center;
      padding: 10px 15px;
      /* 固定高度：50px(cover) + 20px(padding) = 70px */
      height: 70px; 
      box-sizing: border-box;
      margin-bottom: 10px; /* 替代 gap */
      
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          background-color: #fafafa;
      }

      .cover {
          width: 50px;
          height: 50px;
          border-radius: 4px;
          overflow: hidden;
          margin-right: 15px;
          flex-shrink: 0;
          
          img {
              width: 100%;
              height: 100%;
              object-fit: cover;
          }
      }

      .info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;

          .name {
              font-size: 14px;
              color: #333;
              font-weight: 500;
              margin-bottom: 4px;
              white-space: nowrap; 
              overflow: hidden;
              text-overflow: ellipsis;
              
              .alias {
                  color: #999;
                  margin-left: 5px;
                  font-weight: normal;
              }
          }

          .details {
              font-size: 12px;
              color: #666;
              white-space: nowrap; 
              overflow: hidden;
              text-overflow: ellipsis;

              span {
                  margin-right: 10px;
                  
                  &.album {
                    color: #999;
                  }
              }
          }
      }

      .duration {
          font-size: 12px;
          color: #999;
          width: 60px;
          text-align: right;
      }
      
      .action {
          width: 40px;
          text-align: center;
          margin-left: 10px;
          opacity: 0;
          transition: opacity 0.3s;
          
          .play-icon {
             font-size: 20px;
             color: #c20c0c;
          }
      }
      
      &:hover .action {
          opacity: 1;
      }
  }
    
  .empty-state {
      text-align: center;
      padding: 40px 0;
      color: #999;
  }
`;
