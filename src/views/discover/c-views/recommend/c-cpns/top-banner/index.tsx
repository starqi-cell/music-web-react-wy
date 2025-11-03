import { useAppSelector } from '@/store';
import React,{memo, useRef,useState } from 'react';
import type { FC,ReactNode } from 'react';
import { shallowEqual } from 'react-redux';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { BannerWrapper } from './style';
import { BannerLeft } from './style';
import { BannerRight } from './style';
import { BannerControl } from './style';
import classNames from 'classnames';


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
        // 延迟更新背景，让它在淡出动画进行到一半时切换
        // Carousel 的 fade 效果默认持续时间是 500ms，所以在 250ms 时切换背景

            setCurrentIndex(to);

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
                                <span className={classNames('item', { active: index === currentIndex })}></span>
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

export default memo(TopBanner);