import { Helmet } from 'react-helmet';

import { PeopleContextController } from 'context/PeopleContextController';
import { SearchBar } from 'components/searchBar/SearchBar';
import { Pagination } from 'components/pagination/Pagination';
import { Characters } from 'components/characters/Characters';

export const Home = () => {
  // add title
  return (
    <PeopleContextController>
      <div
        className="home"
        data-testid="home"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100vh',
          padding: '100px 0 40px'
        }}
      >
        <Helmet>
          <title>Primotly-SPA</title>
        </Helmet>
        <SearchBar />
        <Characters />
        <Pagination />
      </div>
    </PeopleContextController>
  );
};
