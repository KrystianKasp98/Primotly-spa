import { styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Button, InputBase } from '@mui/material';

const SearchBarWrapper = styled(Box)(() => ({
  position: 'relative',
  marginTop: '100px'
}));

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: '#fff',
  width: '50vw',
  position: 'absolute',
  transform: 'translate(-50%)'
}));

const SearchInput = styled(InputBase)(() => ({
  width: '100%',
  color: '#000'
}));

const SubmitButton = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#000',
  '&:hover': {
    color: '#000',
    backgroundColor: '#fff'
  }
}));

const PaginationButton = styled(Button)(() => ({
  color: '#000',
  backgroundColor: '#fff',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#000'
  }
}));

export {
  SearchBarWrapper,
  StyledAppBar,
  Toolbar,
  SubmitButton,
  SearchInput,
  PaginationButton
};
