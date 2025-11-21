import React,{memo} from 'react';
import type { FC,ReactNode } from 'react';
import { NotFoundWrapper } from './style';

interface IProps {
    children?: ReactNode;
}

const NotFound: FC<IProps> = memo((props) => {

    return (

        <NotFoundWrapper>
            <div className="content">
                <div className="image">
                    <img src={require('@/assets/img/not_found.png')} alt="Not Found" />
                </div>
                <div className="text">很抱歉，你要查找的网页找不到</div>
            </div>
        </NotFoundWrapper>
    );
});

export default memo(NotFound);