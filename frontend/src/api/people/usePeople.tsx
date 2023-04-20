import { useState, useCallback } from 'react';

import { axios } from '../axios';

export const usePeople = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<any>();

  const fetchPeople = useCallback(async (name: string) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const { data: peopleData } = await axios.get<any>(
        `/people/?search=${name}`
      ); // parse it by queryParamsUrl
      // const { data: planetData } = await axios.get<any>(
      //   `/planets/?search=${name}`
      // ); // parse it by queryParamsUrl
      // console.log({ planetData });
      // let peopleDataRequest = [];
      // planetData.results.forEach(planet => {
      //   planet.residents.forEach(resident => peopleDataRequest.push(resident));
      // });
      // peopleDataRequest = [...new Set(peopleDataRequest)];
      setData(peopleData.results);
    } catch (_error) {
      setErrorMessage('Something went wrong');
    }
  }, []);

  return {
    data,
    fetchPeople,
    isLoading,
    errorMessage
  };
};
