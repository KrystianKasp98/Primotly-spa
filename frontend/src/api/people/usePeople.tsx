import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';

import { cutString } from 'utils/methods';
import { QUERY_PARAM } from 'utils/constants';

import { axios } from '../axios';

import {
  PeopleResDto,
  PersonData,
  PlanetResDto,
  FilmResDto,
  PersonFilm,
  PersonHomeworld,
  PeoplePagination,
  StoredFilm,
  StoredPlanet
} from './people.types';

const storedFilms: StoredFilm[] = [];
const storedPlanets: StoredPlanet[] = [];
const defaultPagination: PeoplePagination = {
  next: null,
  previous: null,
  count: null
};

export const usePeople = () => {
  // pagination.page depends only on url page when fetching data only!
  const [params, setParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<PersonData[] | null>(null);
  const [pagination, setPagination] =
    useState<PeoplePagination>(defaultPagination);

  const fetchPeople = useCallback(async (urlString: string) => {
    setIsLoading(true);
    setErrorMessage(null);
    setParams(prev => {
      const { query } = queryString.parseUrl(urlString);
      const page = typeof query.page === 'string' ? query.page : '1';
      const search = typeof query.search === 'string' ? query.search : '';

      prev.set(QUERY_PARAM.page, page);
      prev.set(QUERY_PARAM.search, search);

      return prev;
    });

    try {
      const {
        data: { results: peopleData, next, previous, count }
      } = await axios.get<PeopleResDto>(urlString);
      setPagination({ next, previous, count });

      const newData: PersonData[] = [];

      for await (const { homeworld, films, name } of peopleData) {
        let personHomeworld: PersonHomeworld;
        const personFilms: PersonFilm[] = [];

        const storedPlanet = storedPlanets.find(
          planet => planet.url === homeworld
        );

        if (storedPlanet) {
          personHomeworld = {
            name: storedPlanet.name,
            population: storedPlanet.population
          };
        } else {
          const { data: fetchedPlanet } = await axios.get<PlanetResDto>(
            homeworld
          );
          personHomeworld = {
            name: fetchedPlanet.name,
            population: fetchedPlanet.population
          };
          storedPlanets.push({ ...personHomeworld, url: fetchedPlanet.url });
        }

        for await (const film of films) {
          const storedFilm = storedFilms.find(
            fetchedFilm => fetchedFilm.url === film
          );

          if (storedFilm) {
            personFilms.push({
              title: storedFilm.title,
              opening_crawl: storedFilm.opening_crawl,
              release_date: storedFilm.release_date
            });
          } else {
            const {
              data: { url, title, opening_crawl, release_date }
            } = await axios.get<FilmResDto>(film);

            const personFilm = {
              title,
              opening_crawl: cutString(opening_crawl, 127),
              release_date
            };

            storedFilms.push({
              url,
              ...personFilm
            });

            personFilms.push(personFilm);
          }
        }

        newData.push({
          name,
          homeworld: personHomeworld,
          films: personFilms
        });
      }

      setData(newData);
    } catch (_error) {
      setErrorMessage('Failed to fetch characters'); // give some feedback to user, maybe modal, notification
      setPagination(defaultPagination);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetch = (searchValue: string, page: string = '1') =>
    fetchPeople(
      `${process.env.REACT_APP_API_URL}/people?page=${page}&search=${searchValue}`
    );

  const paginateNext = () => {
    if (pagination.next) {
      return fetchPeople(pagination.next);
    }
    return Promise.reject();
  };

  const paginatePrevious = () => {
    if (pagination.previous) {
      return fetchPeople(pagination.previous);
    }
    return Promise.reject();
  };

  useEffect(() => {
    const searchValue = params.get(QUERY_PARAM.search);
    const page = params.get('page') || '1';
    if (searchValue) {
      fetch(searchValue, page);
    }
  }, []);

  return {
    data,
    fetch,
    paginateNext,
    paginatePrevious,
    pagination,
    isLoading,
    errorMessage
  };
};
