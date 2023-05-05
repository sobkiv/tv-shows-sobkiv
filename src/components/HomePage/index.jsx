import React, { useCallback, useState } from 'react';
import MainPageLayout from './MainPageLayout';
import ShowGrid from './ShowGrid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchShow } from '../../store/thunks';
import { SearchButtonWrapper, SearchInput } from './Home.styled';

const Home = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const firstSearch = useSelector((state) => state.show.isActive);

  const onInputChange = useCallback(
    (ev) => {
      setInput(ev.target.value);
    },
    [setInput]
  );

  const onSearch = () => {
    if (input.length !== 1) {
      dispatch(fetchShow(input));
    }
  };

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) onSearch();
  };

  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        placeholder="Type the show's name"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch} style={{ fontWeight: '600' }}>
          Find
        </button>
      </SearchButtonWrapper>
      {firstSearch ? <ShowGrid /> : null}
    </MainPageLayout>
  );
};

export default Home;
