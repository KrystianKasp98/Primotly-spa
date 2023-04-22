import { usePeopleContext } from 'context/usePeopleContext';

import { CharacterCard } from './CharacterCard';
import { CharactersWrapper } from './Characters.styled';

export const Characters = () => {
  const { data, isLoading } = usePeopleContext();
  return (
    <CharactersWrapper className="characters" data-testid="characters">
      {isLoading
        ? [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
            <CharacterCard
              name="???"
              homeWorldName="???"
              homeWorldPopulation="???"
            />
          ))
        : null}
      {data && !isLoading
        ? data.map(person => (
            <CharacterCard
              name={person.name}
              homeWorldName={person.homeworld.name}
              homeWorldPopulation={person.homeworld.population}
            />
          ))
        : null}
    </CharactersWrapper>
  );
};
