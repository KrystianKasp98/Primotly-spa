import { Helmet } from 'react-helmet';

import { PeopleContextController } from 'context/PeopleContextController';
import { SearchBar } from 'components/searchBar/SearchBar';
import { Pagination } from 'components/pagination/Pagination';

export const Home = () => {
  // add title
  return (
    <PeopleContextController>
      <div className="home" data-testid="home">
        <Helmet>
          <title>Primotly-SPA</title>
        </Helmet>
        <SearchBar />
        <Pagination />
      </div>
    </PeopleContextController>
  );
};
