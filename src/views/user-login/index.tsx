// src/views/user-login/index.tsx
//  用户登录页面组件

import { memo } from 'react';
import type { FC,ReactNode } from 'react';
import { UserLoginWrapper } from './style';

interface IProps {
    children?: ReactNode;
}

const UserLogin: FC<IProps> = memo((props) => {

    return (
        <UserLoginWrapper className='sprite_02'>
            <p className='desc'>
                登录网易云音乐，可以享受无限收藏的乐趣，并且同步到手机
            </p>
            <a href="#/login" className='sprite_02'>用户登录</a>
        </UserLoginWrapper>
    )
});

export default memo(UserLogin);