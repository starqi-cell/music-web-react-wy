import React, { FC,ReactNode,useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import { getTops } from "./store/actionCreators";

import TopRanking from "./c-cpns/top-ranking";
import RankingHeader from './c-cpns/ranking-header';
import RankingList from './c-cpns/ranking-list';
import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "./style";

interface IProps {
    children?: ReactNode
}


const Ranking: FC<IProps> = memo((props) => {

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getTops());
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRanking/>
      </RankingLeft>
      <RankingRight>
        <RankingHeader/>
        <RankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})

export default memo(Ranking);