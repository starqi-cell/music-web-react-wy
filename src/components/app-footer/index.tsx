//  src/components/app-footer/index.tsx
//  应用底部组件

import { memo } from 'react';
import type { FC,ReactNode } from 'react';

import { footTopContent } from '@/assets/data/local-data';

import { AppFooterWrapper } from './style';

interface IProps {
    children?: ReactNode;
}

const AppFooter: FC<IProps> = memo((props) => {

    function showItem(item:any){
        return(
        <div className="foot-link" key={item.link}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="icon"></div>
            </a>
            <div className="text">{item.text}</div>
        </div> 
        );
    }
    return (
        <AppFooterWrapper>
            <div className="foot">
                {
                    footTopContent.map((item, index) => (
                        showItem(item)
                    ))
                }
            </div>
        </AppFooterWrapper>
    );
});

export default AppFooter;