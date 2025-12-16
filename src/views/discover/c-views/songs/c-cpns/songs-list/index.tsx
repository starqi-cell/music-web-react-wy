import React, { FC,ReactNode,useState, memo } from 'react';
import { useDispatch, shallowEqual } from "react-redux";

import { PER_PAGE_NUMBER } from '../../store/constants';
import { getSongList } from "../../store/actionCreators";

import HYThemeCover from '@/components/songs-menu-item';
import AppPagination from '@/components/pagination';
import {
  SongListWrapper
} from "./style";

import { useAppSelector } from '@/store/index';

interface IProps {
    children?: ReactNode;
}

const SongsList: FC<IProps> = memo((props) => {
  // hooks
  const [currentPage, setCurrentPage] = useState(1);

  // redux
  const { categorySongs } = useAppSelector((state) => ({
    categorySongs: state.songs.categorySongs
  }), shallowEqual);
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;
  const dispatch = useDispatch<any>();

  function onPageChange(page: number, pageSize: number) {
    setCurrentPage(page);
    dispatch(getSongList(page));
  }

  return (
    <SongListWrapper>
      <div className="songs-list">
        {
          songList.map((item, index) => {
            return (
              <HYThemeCover itemData={item} key={item.id} />
            )
          })
        }
      </div>
      <AppPagination currentPage={currentPage} 
                    total={total} 
                    pageSize={PER_PAGE_NUMBER}
                    onPageChange={onPageChange}/>
    </SongListWrapper>
  )
})

export default memo(SongsList);