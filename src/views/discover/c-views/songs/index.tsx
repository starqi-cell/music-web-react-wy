import React,{memo} from 'react';
import type { FC,ReactNode } from 'react';

interface IProps {
    children?: ReactNode;
}

const Songs: FC<IProps> = memo((props) => {

    return <div>Songs</div>;
});

export default memo(Songs);