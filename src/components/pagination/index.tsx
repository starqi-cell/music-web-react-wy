import React, { memo } from 'react';
import { Pagination } from 'antd';
import { PaginationWrapper } from './style';

interface IProps {
  currentPage: number;
  total: number;
  pageSize: number;
  onPageChange: (page: number, pageSize: number) => void;
}

export default memo(function HYPagination(props: IProps) {
  const { currentPage, total, pageSize, onPageChange } = props;

  // antd pagination onChange: (page, pageSize)
  function itemRender(current: any, type: any, originalElement: any) {
    if (type === 'prev') {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === 'next') {
      return <button className="control next">下一页 &gt;</button>;
    }
    return originalElement;
  }

  return (
    <PaginationWrapper>
      <Pagination className="pagination"
                  size="small"
                  current={currentPage}
                  defaultCurrent={1}
                  total={total}
                  pageSize={pageSize}
                  showSizeChanger={false}
                  itemRender={itemRender}
                  onChange={onPageChange}/>
    </PaginationWrapper>
  )
})
