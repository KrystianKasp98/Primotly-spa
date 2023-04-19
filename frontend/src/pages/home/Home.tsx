import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <div className="home" data-testid="home">
      <Helmet>
        <title>Primotly-SPA</title>
      </Helmet>
      home
    </div>
  );
};
