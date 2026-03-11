
import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import SearchBar from './componment/seachBar';
import SearchResult from './componment/searchResult';
import { ExploreWrapper } from './style';

interface IProps {
    children?: ReactNode;
}

const Explore: FC<IProps> = memo((props) => {

    return (
        <ExploreWrapper>
            <div className="content">
                <div className="header">
                    <h2>发现音乐</h2>
                </div>
                <SearchBar />
                <SearchResult />
            </div>
        </ExploreWrapper>
    );
});

export default Explore;
