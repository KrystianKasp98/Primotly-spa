import { Helmet } from 'react-helmet';

import { PeopleContextController } from 'context/PeopleContextController';
import { SearchBar } from 'components/searchBar/SearchBar';
import { Pagination } from 'components/pagination/Pagination';
import { Characters } from 'components/characters/Characters';

import { HomeWrapper } from './Home.styled';

export const Home = () => {
  // add title
  return (
    <PeopleContextController>
      <Helmet>
        <title>Primotly-SPA</title>
      </Helmet>
      <HomeWrapper>
        <SearchBar />
        <Characters />
        <Pagination />
      </HomeWrapper>
    </PeopleContextController>
  );
};
