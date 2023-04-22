import { Helmet } from 'react-helmet';

import { SearchBar } from 'components/searchBar/SearchBar';
import { Pagination } from 'components/pagination/Pagination';

export const Home = () => {
  return (
    <div className="home" data-testid="home">
      <Helmet>
        <title>Primotly-SPA</title>
      </Helmet>
      <SearchBar />
      <Pagination />
    </div>
  );
};
