import React,{memo} from 'react';
import type { FC,ReactNode } from 'react';
import { AppFooterWrapper } from './style';

interface IProps {
    children?: ReactNode;
}

const AppFooter: FC<IProps> = memo((props) => {

    const footTopContent = {
        footTopText: ["音乐开放平台","云村交易所","X StudioAI歌手","用户认证","AI 免费写歌","云推歌","赞赏"],
        footTopLinks: [
            "https://developer.music.163.com/st/developer",
            "https://music.163.com/st/web-sublicense/home",
            "https://xstudio.music.163.com/",
            "https://music.163.com/st/userbasic#/auth",
            "https://tianyin.music.163.com/#/",
            "https://music.163.com/st/ad-song",
            "https://music.163.com/web/reward"],
        footTopIcons: [
            "https://music.163.com/st/ad-song",
            "https://music.163.com/web/reward"
        ]
    }
    return (
        <AppFooterWrapper>
            <div className="foot-top">
                {
                    footTopContent.footTopText.map((text, index) => (
                    <div className="foot-link" key={index}>
                        <div className="icon">{footTopContent.footTopIcons[index]}</div>
                        <div className="text">{text}</div>
                    </div>
                    ))
                }
            </div>
            <div className="foot-bottom">foot-bottom</div>
        </AppFooterWrapper>
    );
});

export default memo(AppFooter);