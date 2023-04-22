import { useState, useCallback } from 'react';

import { axios } from '../axios';

import {
  PeopleResDto,
  PersonData,
  PlanetResDto,
  FilmResDto,
  PersonFilms,
  PeoplePagination
} from './people.types';

export const usePeople = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<PersonData[]>([]);
  const [pagination, setPagination] = useState<PeoplePagination>({
    next: null,
    previous: null
  });

  const fetchPeople = useCallback(async (url: string) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const {
        data: { results: peopleData, next, previous }
      } = await axios.get<PeopleResDto>(url);
      setPagination({ next, previous });
      const newData: PersonData[] = [];
      // think about handling next pages CHECK RES, and about min limit query, and wrap it into react-use-Form
      // if data.count > 10 do fetch next page
      for await (const { homeworld, films, name } of peopleData) {
        const { data: planetData } = await axios.get<PlanetResDto>(homeworld);

        const personFilms: PersonFilms[] = [];
        for await (const film of films) {
          const {
            data: { title, opening_crawl, release_date }
          } = await axios.get<FilmResDto>(film);
          personFilms.push({
            title,
            opening_crawl:
              opening_crawl.length > 130
                ? `${opening_crawl.slice(0, 127)}...`
                : opening_crawl, // refactor this create own method
            release_date
          });
        }

        newData.push({
          name,
          homeworld: {
            name: planetData.name,
            population: planetData.population
          },
          films: personFilms
        });
      }
      // CREATE PAGINATE SYSTEM
      // console.log({ pagination });
      setData(newData);
    } catch (_error) {
      setErrorMessage('Failed to fetch characters');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetch = (searchValue: string) =>
    fetchPeople(`/people/?search=${searchValue}`);

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
