
import { memo, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input, Button, ConfigProvider } from 'antd';
import { debounce } from '@/utils/debounce';
import appRequest from '@/service';
import { useAppDispatch } from '@/store';
import { fetchSearchbykeywordAction } from '../../store/search';
import { SearchBarWrapper } from './style';

interface IProps {
  children?: ReactNode;
}

const SearchBar: FC<IProps> = memo(() => {
  const [options, setOptions] = useState<any[]>([]);
  const [keyword, setKeyword] = useState('');
  const dispatch = useAppDispatch();
  const highlightKeyword = (text: string, keyword: string) => {
    const index = text.toLowerCase().indexOf(keyword.toLowerCase());
    if (index === -1) return text;

    const before = text.slice(0, index);
    const match = text.slice(index, index + keyword.length);
    const after = text.slice(index + keyword.length);

    return (
      <span>
        {before}
        <span style={{ color: 'red' }}>{match}</span>
        {after}
      </span>
    );
  };

  const fetchSuggestions = async (value: string) => {
    if (!value) {
      setOptions([]);
      return;
    }

    try {
      const res: any = await appRequest.get({
        url: `/search/suggest`,
        params: {
          keywords: value
        }
      });

      const data = res.result;

      const categoryMap: Record<string, string> = {
        songs: '单曲',
        artists: '歌手',
        albums: '专辑',
        playlists: '歌单'
      };

      if (data && Array.isArray(data.order)) {
        const formattedOptions = data.order
          .map((key: string) => {
            const items = data[key];
            if (!items || !items.length) return null;

            return {
              label: (
                <span style={{ fontWeight: 'bold', color: '#666' }}>
                  {categoryMap[key] || key}
                </span>
              ),
              options: items.map((item: any) => {
                let text = item.name;
                if (key === 'songs' && item.artists) {
                  text += ` - ${item.artists.map((a: any) => a.name).join(' / ')}`;
                } else if (key === 'albums' && item.artist) {
                  text += ` - ${item.artist.name}`;
                }

                return {
                  value: text,
                  label: highlightKeyword(text, value),
                };
              })
            };
          })
          .filter(Boolean);

        setOptions(formattedOptions as any[]);
      } else {
        setOptions([]);
      }
    } catch (error) {
      console.error(error);
      setOptions([]);
    }
  };

  const debouncedSearch = useRef(debounce(fetchSuggestions, 300)).current;


  // 真正执行搜索
  const handleSearch = (value: string) => {
    const finalKeyword = value.trim();
    if (!finalKeyword) return;
    console.log('搜索关键词:', finalKeyword);
    dispatch(fetchSearchbykeywordAction(finalKeyword));
  };

  return (
    <SearchBarWrapper>
        <ConfigProvider
        theme={{
            components: {
            Input: {
                activeShadow: 'none',
                errorActiveShadow: 'none',
                activeBorderColor: '#c20c0c',
                hoverBorderColor: '#c20c0c',
            },
            Button: {
                defaultHoverBorderColor: '#c20c0c',
                defaultActiveBorderColor: '#c20c0c',
            }
            },
            token: {
            colorPrimary: '#c20c0c',
            colorPrimaryHover: '#a40a0a',
            }
        }}
        >
        <div className="search-container">
            <AutoComplete
                style={{ width: '100%' }}
                options={options}
                value={keyword}
                onChange={(value) => {
                setKeyword(value);
                debouncedSearch(value);
                }}
                onSelect={(value) => {
                setKeyword(value);
                handleSearch(value);
                }}
            >
                <Input.Search
                placeholder="搜索音乐、歌手、歌词..."
                size="large"
                onSearch={handleSearch}
                enterButton="搜索"
                allowClear
                />
            </AutoComplete>
        </div>
        </ConfigProvider>
    </SearchBarWrapper>
  );
});

export default SearchBar;
