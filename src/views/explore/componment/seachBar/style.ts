
import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  .search-container {
    position: relative;
    width: 600px; /* 增加宽度 */

    .ant-input-group-wrapper {
        .ant-input-wrapper {
             .ant-input-affix-wrapper {
                 border-radius: 20px 0 0 20px;
                 border-color: #c20c0c;
                 padding-left: 15px;
                 font-size: 14px;
                 
                 &:hover, &:focus {
                    border-color: #c20c0c;
                    box-shadow: 0 0 0 2px rgba(194, 12, 12, 0.2);
                 }
             }

             .ant-input-search-button {
                  border-radius: 0 20px 20px 0;
                  background-color: #c20c0c;
                  border-color: #c20c0c;
                  height: 40px;
                  width: 80px;

                  &:hover {
                      background-color: #a40a0a;
                      border-color: #a40a0a;
                  }
                  
                  .anticon {
                      font-size: 18px;
                      color: #fff;
                  }
             }
        }
    }
    
    /* AutoComplete 下拉框样式覆盖 (如果需要) */
  }
`;
