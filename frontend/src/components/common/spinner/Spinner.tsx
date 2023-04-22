import { Bars } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Bars
        height="80"
        width="80"
        color="#eee"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};
