import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { usePeopleContext } from 'context/usePeopleContext';
import { Spinner } from 'components/common/spinner/Spinner';

import { CharacterCard } from './CharacterCard';
import { CharactersWrapper } from './Characters.styled';

export const Characters = () => {
  const { data, isLoading, errorMessage } = usePeopleContext();

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  return (
    <CharactersWrapper className="characters" data-testid="characters">
      {isLoading ? <Spinner /> : null}
      {isLoading
        ? Array.from(new Array(10)).map(() => (
            <CharacterCard
              name={null}
              homeWorldName={null}
              homeWorldPopulation={null}
              films={null}
            />
          ))
        : null}
      {data && !isLoading
        ? data.map(person => (
            <CharacterCard
              name={person.name}
              homeWorldName={person.homeworld.name}
              homeWorldPopulation={person.homeworld.population}
              films={person.films}
            />
          ))
        : null}
    </CharactersWrapper>
  );
};
