//  src/components/pagination/style.ts
//  分页组件样式

import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  margin: 30px 0;
  text-align: center;
  display: flex;
  justify-content: center;

  .ant-pagination-item, .ant-pagination-prev, .ant-pagination-next {
    border: 1px solid #ccc;
    border-radius: 2px;
    
    a {
      font-size: 12px;
      color: #333;
    }

    &.ant-pagination-item-active {
      background-color: #c20c0c;
      border-color: #a2161b;
      
      a {
        color: #fff;
      }
    }

    &:hover {
      border-color: #666;
      
      a {
        color: #333;
      }
    }
    
    &.ant-pagination-item-active:hover {
      border-color: #a2161b;
      a {
        color: #fff;
      }
    }
  }
`
