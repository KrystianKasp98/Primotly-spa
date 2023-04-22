import { usePeopleContext } from 'context/usePeopleContext';
import { Spinner } from 'components/common/spinner/Spinner';

import { CharacterCard } from './CharacterCard';
import { CharactersWrapper } from './Characters.styled';

export const Characters = () => {
  const { data, isLoading } = usePeopleContext();
  return (
    <CharactersWrapper className="characters" data-testid="characters">
      {isLoading ? <Spinner /> : null}
      {isLoading
        ? Array.from(new Array(10)).map(() => (
            <div style={{ filter: 'blur(1px)' }}>
              <CharacterCard
                name={null}
                homeWorldName={null}
                homeWorldPopulation={null}
              />
            </div>
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
