import { useState } from 'react';

import {
  SearchBarWrapper,
  StyledAppBar,
  Toolbar,
  SubmitButton,
  SearchInput
} from '../common/mui';

export const SearchBar = () => {
  const [text, setText] = useState<string>('');

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
          <SubmitButton variant="contained">Search</SubmitButton>
        </Toolbar>
      </StyledAppBar>
    </SearchBarWrapper>
  );
};
