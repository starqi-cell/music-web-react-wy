import styled from "styled-components";

export const NotFoundWrapper = styled.div`
    .content {
        border: 1px solid #d3d3d3;
        border-bottom: none;
        align-items: center;
        display: flex;
        height: 1034px;
        width: 980px;
        justify-content: center;
        margin: 0 auto; 
        flex-direction: column;
        .image{
            width: 270px;
            height: 112px;
            margin-bottom: 20px; /* 图片与文字的间距 */
            img {
                width: 100%;
                height: 100%;
            }
        }
        .text{
            font-size: 18px;
            color: #666666;
            width: 900px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        }
`