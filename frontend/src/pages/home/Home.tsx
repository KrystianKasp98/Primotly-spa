import { Helmet } from 'react-helmet';

import { SearchBar } from 'components/searchBar/SearchBar';

export const Home = () => {
  return (
    <div className="home" data-testid="home">
      <Helmet>
        <title>Primotly-SPA</title>
      </Helmet>
      <SearchBar />
    </div>
  );
};
