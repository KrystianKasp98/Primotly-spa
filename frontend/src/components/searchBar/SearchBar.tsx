import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import { usePeople } from 'api/people/usePeople';

import {
  SearchBarWrapper,
  StyledAppBar,
  Toolbar,
  SubmitButton,
  SearchInput
} from '../common/mui';
import { QUERY_PARAM_SEARCH } from '../../constants';

export const SearchBar = () => {
  const [params, setParams] = useSearchParams();
  const { fetch, pagination, paginateNext, paginatePrevious } = usePeople();
  const searchValue = params.get(QUERY_PARAM_SEARCH) || '';

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParams(prev => {
      prev.set(QUERY_PARAM_SEARCH, e.target.value);
      return prev;
    });
  };
  // add loader, add pagination buttons, create a special component for this
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
      <button
        onClick={paginatePrevious}
        type="button"
        disabled={!pagination.previous}
      >
        previous
      </button>
      <button onClick={paginateNext} type="button" disabled={!pagination.next}>
        next
      </button>
    </SearchBarWrapper>
  );
};
