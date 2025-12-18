// src/views/discover/c-views/songs/c-cpns/songs-list/index.tsx
//  歌单页面列表组件

import { FC,ReactNode,useState, memo } from 'react';
import { useDispatch, shallowEqual } from "react-redux";

import { PER_PAGE_NUMBER } from '../../store/constants';
import { getSongList } from "../../store/action";

import ThemeCover from '@/components/songs-menu-item';
import AppPagination from '@/components/pagination';
import {
  SongListWrapper
} from "./style";

import { useAppSelector } from '@/store/index';

interface IProps {
    children?: ReactNode;
}

const SongsList: FC<IProps> = memo((props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { categorySongs } = useAppSelector((state) => ({
    categorySongs: state.songs.categorySongs
  }), shallowEqual);
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;
  const dispatch = useDispatch<any>();

  function onPageChange(page: number) {
    setCurrentPage(page);
    dispatch(getSongList(page));
  }

  return (
    <SongListWrapper>
      <div className="songs-list">
        {
          songList.map((item, index) => {
            return (
              <ThemeCover itemData={item} key={item.id} />
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