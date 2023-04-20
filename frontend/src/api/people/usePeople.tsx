import { useState, useCallback } from 'react';

import { axios } from '../axios';

import { Person, PeopleResDto, PlanetResDto } from './people.types';

export const usePeople = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<Person[]>();

  const fetchPeople = useCallback(async (name: string) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const {
        data: { results: peopleData }
      } = await axios.get<PeopleResDto>(`/people/?search=${name}`); // parse it by queryParamsUrl
      // think about handling next pages, and about min limit query, and wrap it into react-use-Form

      const {
        data: { results: planetData }
      } = await axios.get<PlanetResDto>(`/planets/?search=${name}`); // parse it by queryParamsUrl

      const fetchedPeopleUrls = peopleData.map(({ url }) => url);
      const peopleUrlsFromPlanets: string[] = [];
      planetData.forEach(({ residents }) => {
        residents.forEach(resident => peopleUrlsFromPlanets.push(resident));
      });

      let peopleUrlsToFetch = [...new Set(peopleUrlsFromPlanets)];
      peopleUrlsToFetch = peopleUrlsToFetch
        .filter(url => !fetchedPeopleUrls.includes(url))
        .map(val => val.replace('https://swapi.dev/api', ''));

      for await (const url of peopleUrlsToFetch) {
        const { data: person } = await axios.get<Person>(url);
        peopleData.push(person);
      }

      setData(peopleData);
    } catch (_error) {
      setErrorMessage('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    fetchPeople,
    isLoading,
    errorMessage
  };
};
