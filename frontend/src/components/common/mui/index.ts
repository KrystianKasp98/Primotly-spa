import { styled } from '@mui/material/styles';
import { Box, AppBar, Toolbar, Button, InputBase } from '@mui/material';

// searchBar
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

// pagination
const PaginationWrapper = styled(Box)(() => ({
  position: 'absolute',
  bottom: '100px',
  left: '50%',
  transform: 'translate(-50%)',
  width: '500px',
  backgroundColor: '#fff',
  borderRadius: '7px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
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
  PaginationWrapper,
  PaginationButton
};
