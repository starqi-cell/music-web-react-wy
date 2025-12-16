// src/components/app-header/index.tsx
// 应用头部组件

import type { FC,ReactNode } from 'react';
import { NavLink  } from 'react-router-dom'
import { Input } from 'antd';
import headerTitles from '@/assets/data/header-titles.json';
import { SearchOutlined } from '@ant-design/icons';

import { 
    HeaderWrapper,
    HeaderLeft,
    HeaderRight 
} from './style';


interface IProps {
    children?: ReactNode;
}

const AppHeader: FC<IProps> = (props) => {

    function showItem(item:any){
        if(item.type === 'path'){
            return (
            <NavLink to={item.link} key={item.link}>
                {item.title}
                <i className='icon sprite_01'></i>
            </NavLink>
            )
        }else{
            return <a href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
        }
    }

    return(
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a className='logo sprite_01' href="/#">
                    网易云音乐
                    </a>
                    <div className="title-list">
                    {
                        headerTitles.map((item:any)=>(
                            <div className="item" key={item.title}>
                                {showItem(item)}
                            </div>
                        ))
                    }
                </div>
                </HeaderLeft>
                <HeaderRight>
                    <span className="input">
                        <Input 
                            className="search"
                            placeholder="音乐/视频/电台/用户" 
                            prefix={<SearchOutlined />} 
                        />
                    </span>
                    <div className="center">创作者中心</div>
                    <span className="right">登录</span>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    );
};

export default AppHeader;