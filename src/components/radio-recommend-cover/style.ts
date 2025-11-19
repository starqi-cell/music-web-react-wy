import styled from "styled-components";

export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  
  .header {
    position: relative;

    & > img {
      width: 150px;
      height: 150px;
    }

    .name {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      line-height: 20px;
      padding: 0 10px;
      color: #fff;
      background-color: rgba(0, 0, 0, .5);
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .text {
    margin-top: 5px;
    line-height: 18px;
    color: #333;
  }
`
