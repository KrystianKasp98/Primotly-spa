import styled from '@emotion/styled';
import { Box, AppBar, InputBase, Button, Toolbar } from '@mui/material';

export const SearchBarWrapper = styled(Box)(() => ({
  position: 'absolute',
  top: '100px',
  left: '50%',
  transform: 'translate(-50%)',
  width: '50vw'
}));

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: '#fff',
  width: '100%'
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
