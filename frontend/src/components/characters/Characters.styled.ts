import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

export const CharactersWrapper = styled('div')(() => ({
  width: '1600px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '20px',
  position: 'relative'
}));

export const CharacterProp = styled(Typography)(() => ({
  display: 'flex',
  alignItems: 'center',
  margin: '0 0 10px'
}));

export const BlurWrapper = styled('div')(() => ({
  filter: 'blur(1px)'
}));
