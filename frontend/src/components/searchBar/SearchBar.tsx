import { useState } from 'react';

import { usePeople } from 'api/people/usePeople';

import {
  SearchBarWrapper,
  StyledAppBar,
  Toolbar,
  SubmitButton,
  SearchInput
} from '../common/mui';

export const SearchBar = () => {
  const [text, setText] = useState<string>('');
  const { fetchPeople } = usePeople();
  return (
    <SearchBarWrapper>
      <StyledAppBar>
        <Toolbar>
          <SearchInput
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ width: '100%', color: '#000' }}
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <SubmitButton onClick={() => fetchPeople(text)} variant="contained">
            Search
          </SubmitButton>
        </Toolbar>
      </StyledAppBar>
    </SearchBarWrapper>
  );
};
