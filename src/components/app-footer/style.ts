import styled from "styled-components";

// 图标位置配置：[正常状态坐标, Hover状态坐标]
const iconConfig = [
    { normal: "-170px -5px", hover: "-5px -115px" },
    { normal: "-5px -170px", hover: "-60px -170px" },
    { normal: "-170px -60px", hover: "-115px -60px" },
    { normal: "-60px -60px", hover: "-115px -5px" },
    { normal: "-5px -60px", hover: "-60px -5px" },
    { normal: "-115px -115px", hover: "-5px -5px" },
    { normal: "-170px -115px", hover: "-60px -115px" },
    
];

export const AppFooterWrapper = styled.div`
    height:326px;
    border-top: 1px solid #d3d3d3;
    display: flex;
    align-items: center;
    flex-direction: column;
    .foot-top{
        margin: 33px 0 0 0;
        height: 72px;
        width: 980px;
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        .foot-link {
            display: flex;
            flex-direction: column;
            align-items: center;

            .text{
                margin-top: 10px;
                white-space: nowrap;
                color:#00000080;
            }
            .icon {
                width: 45px;
                height: 45px;
                background-image: url(${require('@/assets/img/foot_enter_new2.png')}); /* 精灵图路径 */
                background-size: 220px 220px;
                background-repeat: no-repeat;
                cursor: pointer;
            }

            /* 循环生成每个图标的背景位置 */
            ${iconConfig.map((item, index) => `
                &:nth-child(${index + 1}) {
                    .icon {
                        background-position: ${item.normal};
                    }
                    &:hover .icon {
                        background-position: ${item.hover};
                    }
                }
            `).join("")}
        }
    }

`;
