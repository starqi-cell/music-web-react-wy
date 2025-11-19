import React,{memo} from 'react';
import type { FC,ReactNode } from 'react';
import { FocusWrapper } from './style';

interface IProps {
    children?: ReactNode;
}

const Focus: FC<IProps> = memo((props) => {
  return (
    <FocusWrapper>
      <div className="content wrap-v2">
        <div className="pic">
          <a className="login" href="/#">立即登录</a>
        </div>
      </div>
    </FocusWrapper>
  )
});

export default memo(Focus);