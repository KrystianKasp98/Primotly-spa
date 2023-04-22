import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

import { PeopleContextController } from 'context/PeopleContextController';
import { SearchBar } from 'components/searchBar/SearchBar';
import { Pagination } from 'components/pagination/Pagination';
import { Characters } from 'components/characters/Characters';

import { HomeWrapper } from './Home.styled';

export const Home = () => {
  return (
    <PeopleContextController>
      <Helmet>
        <title>Primotly-SPA</title>
      </Helmet>
      <HomeWrapper>
        <Typography variant="h2" component="h1" align="center" color="yellow">
          Primotly SPA
        </Typography>
        <SearchBar />
        <Characters />
        <Pagination />
      </HomeWrapper>
    </PeopleContextController>
  );
};
