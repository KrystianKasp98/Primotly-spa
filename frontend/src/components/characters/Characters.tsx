import { usePeopleContext } from 'context/usePeopleContext';

import { CharacterCard } from './CharacterCard';
import { CharactersWrapper } from './Characters.styled';

export const Characters = () => {
  const { data, isLoading } = usePeopleContext();
  return (
    <CharactersWrapper className="characters" data-testid="characters">
      {isLoading
        ? Array.from(new Array(10)).map(() => (
            <CharacterCard
              name={null}
              homeWorldName={null}
              homeWorldPopulation={null}
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
