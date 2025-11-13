import React,{memo} from 'react';
import type { FC,ReactNode } from 'react';
import { AreaHeaderV2Wrapper } from './style';

interface IProps {
    children?: ReactNode;
    title?: string;
    moreText?: string;
    moreLink?: string;
}

const AreaHeaderV2: FC<IProps> = memo((props) => {
    const { title, moreText, moreLink } = props;

    return (
        <AreaHeaderV2Wrapper>
            <h3 className='title'>{title}</h3>
            {moreLink && moreText && <a href={moreLink}>{moreText} &gt;</a>}
        </AreaHeaderV2Wrapper>
    );
});

export default memo(AreaHeaderV2);