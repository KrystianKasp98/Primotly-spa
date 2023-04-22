import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const PaginationWrapper = styled(Box)(() => ({
  position: 'absolute',
  bottom: '100px',
  left: '50%',
  transform: 'translate(-50%)',
  width: '550px',
  height: '50px',
  backgroundColor: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

export const PaginationButton = styled('button')(() => ({
  color: '#000',
  backgroundColor: '#fff',
  border: 'none',
  outline: 'none',
  padding: '11px',
  cursor: 'pointer',
  '&:hover': {
    color: '#fff',
    backgroundColor: '#000'
  },
  '&:disabled': {
    color: '#777',
    backgroundColor: '#ddd'
  }
}));
