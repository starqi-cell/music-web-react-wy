import React,{ memo,useState,useEffect } from 'react';
import type { FC,ReactNode } from 'react';
import hyRequest from '@/service';

interface IProps {
    children?: ReactNode;
}

const Recommand: FC<IProps> = memo((props) => {
    const [banner, setBanner] = useState<any>(null);

    useEffect(() => {
        hyRequest.get({
            url:"/banner"
        }).then(res=>{
            console.log(res);
            setBanner(res);
        })
    },[])

    return(
    <div>
        {
            banner?.banners?.map((item: any)=>{
                return <div key={item.targetId}>
                    <img src={item.imageUrl} alt=""/>
                </div>
            })
        }
    </div>
    )
});

export default memo(Recommand);