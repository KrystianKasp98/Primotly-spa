import styled from '@emotion/styled';
import { Box, AppBar, InputBase, Button, Toolbar } from '@mui/material';

export const SearchBarWrapper = styled(Box)(() => ({
  position: 'relative',
  marginTop: '100px'
}));

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: '#fff',
  width: '50vw',
  position: 'absolute',
  transform: 'translate(-50%)'
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
