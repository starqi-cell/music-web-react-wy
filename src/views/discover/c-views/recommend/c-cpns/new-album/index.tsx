import React,{memo, useRef} from 'react';
import type { FC,ReactNode } from 'react';
import type { CarouselRef } from 'antd/es/carousel';
import { NewAlbumWrapper } from './style';
import { Carousel } from 'antd';
import AreaHeaderV1 from '@/components/area-header-v1';
import { useAppSelector } from '@/store';
import NewAlbumItem from '@/components/new-album-item';

interface IProps {
    children?: ReactNode;
}

const NewAlbum: FC<IProps> = memo((props) => {

    const bannerRef = useRef<CarouselRef>(null);

    const { newAlbums } = useAppSelector((state) => ({
        newAlbums: state.recommend.newAlbums
    }));

    function handlePrevClick(){
        bannerRef.current?.prev();
    }

    function handleNextClick(){
        bannerRef.current?.next();
    }

    return (
    <NewAlbumWrapper>
        <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
        <div className="content">
            <button className="sprite_02 arrow arrow-left" onClick={handlePrevClick}></button>
            <div className="banner">
                {(newAlbums.length > 0) &&
                    <Carousel ref={bannerRef} dots={false} speed={1000} waitForAnimate={true}>
                        {
                            [0,1].map((item)=>{
                                return (
                                    <div className='album-list' key={item}>
                                        {
                                            newAlbums.slice(item*5,(item+1)*5).map((album:any)=>{
                                                return <NewAlbumItem key={album.id} itemdata={album} />;
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                }
            </div>
            <button className="sprite_02 arrow arrow-right" onClick={handleNextClick}></button>
        </div>
    </NewAlbumWrapper>
    );
});

export default memo(NewAlbum);