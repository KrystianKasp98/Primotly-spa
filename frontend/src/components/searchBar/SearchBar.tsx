import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import { usePeopleContext } from 'context/usePeopleContext';

import {
  SearchBarWrapper,
  StyledAppBar,
  Toolbar,
  SubmitButton,
  SearchInput
} from '../common/mui';
import { QUERY_PARAM } from '../../utils/constants';

export const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const { fetch } = usePeopleContext();
  const searchValue = params.get(QUERY_PARAM.search) || '';

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParams(prev => {
      prev.set(QUERY_PARAM.search, e.target.value);
      prev.set(QUERY_PARAM.page, '1');
      return prev;
    });
  };
  // add loader for charcters content,
  return (
    <SearchBarWrapper>
      <StyledAppBar>
        <Toolbar>
          <SearchInput
            placeholder="Search characters..."
            inputProps={{ 'aria-label': 'search' }}
            value={searchValue}
            onChange={handleOnChange}
          />
          <SubmitButton onClick={() => fetch(searchValue)} variant="contained">
            Search
          </SubmitButton>
        </Toolbar>
      </StyledAppBar>
    </SearchBarWrapper>
  );
};
