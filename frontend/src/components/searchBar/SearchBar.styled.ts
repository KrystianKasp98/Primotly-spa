import styled from '@emotion/styled';
import { InputBase, Button, Toolbar } from '@mui/material';

export const SearchBarWrapper = styled('div')(() => ({
  backgroundColor: '#fff',
  width: '50vw'
}));

export const SearchInput = styled(InputBase)(() => ({
  width: '100%',
  color: '#000'
}));

export const SubmitButton = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#000',
  '&:hover': {
    color: '#000',
    backgroundColor: '#fff'
  }
}));

export { Toolbar };
