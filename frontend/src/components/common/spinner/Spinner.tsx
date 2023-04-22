import { Bars } from 'react-loader-spinner';

import { SpinnerWrapper } from './Spinner.styled';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Bars
        height="80"
        width="80"
        color="yellow"
        ariaLabel="three-dots-loading"
      />
    </SpinnerWrapper>
  );
};
