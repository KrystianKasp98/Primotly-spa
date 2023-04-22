import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </PeopleContextController>
  );
};
