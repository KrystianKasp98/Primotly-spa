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
import { QUERY_PARAM_SEARCH } from '../../utils/constants';

export const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const { fetch } = usePeopleContext();
  const searchValue = params.get(QUERY_PARAM_SEARCH) || '';

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParams(prev => {
      prev.set(QUERY_PARAM_SEARCH, e.target.value);
      return prev;
    });
  };
  // add loader for charcters content,
  return (
    <SearchBarWrapper>
      <StyledAppBar>
        <Toolbar>
          <SearchInput
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ width: '100%', color: '#000' }}
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
