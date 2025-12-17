// src/views/discover/c-views/recommend/c-cpns/top-banner/index.tsx
//  推荐页面顶部轮播图组件

import { memo, useRef,useState } from 'react';
import type { FC,ReactNode } from 'react';
import { shallowEqual } from 'react-redux';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import classNames from 'classnames';

import { useAppSelector } from '@/store';

import { BannerWrapper,BannerLeft,BannerRight,BannerControl } from './style';

interface IProps {
    children?: ReactNode;
}

const TopBanner: FC<IProps> = memo((props) => {
    const bannerRef = useRef<CarouselRef>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { banner } = useAppSelector((state) => ({
        banner: state.recommend.banner
    }), shallowEqual);

    function handleLeftChange(){
        bannerRef.current?.prev();
    }

    function handleRightChange(){
        bannerRef.current?.next();
    }

    function handleBeforeChange(from: number, to: number){
        setCurrentIndex(to);
    }

    function handleDotClick(index: number){
        setCurrentIndex(index);
        bannerRef.current?.goTo(index);
    }

    let bgImageUrl =  banner[currentIndex]?.imageUrl;
    if(bgImageUrl){
        bgImageUrl = bgImageUrl + '?imageView&blur=40x20';
    }

    return (
        <BannerWrapper style={{
            background: `url(${bgImageUrl}) center center / 6000px`
        }} >
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel speed={1000} dots={false} ref={bannerRef} autoplaySpeed={3000} autoplay effect='fade' beforeChange={handleBeforeChange}>
                        {
                            banner.map((item,index) => {
                                return (
                                    <div className='banner-item' key={item.imageUrl}>
                                        <img className='image' src={item.imageUrl} alt={item.typeTitle}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    <div className="dots">
                        {banner.map((item,index)=>(
                            <li key={item.imageUrl} >
                                <span className={classNames('item', { active: index === currentIndex })} onClick={() => handleDotClick(index)}></span>
                            </li>
                        ))

                        }
                    </div>
                </BannerLeft>
                <BannerRight>
                </BannerRight>
                <BannerControl>
                    <button className='btn left' onClick={handleLeftChange}></button>
                    <button className='btn right' onClick={handleRightChange}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    );
});

export default TopBanner;