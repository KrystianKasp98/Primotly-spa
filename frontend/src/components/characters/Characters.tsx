import { usePeopleContext } from 'context/usePeopleContext';
import { Spinner } from 'components/common/spinner/Spinner';

import { CharacterCard } from './CharacterCard';
import { CharactersWrapper, BlurWrapper } from './Characters.styled';

export const Characters = () => {
  const { data, isLoading } = usePeopleContext();
  return (
    <CharactersWrapper className="characters" data-testid="characters">
      {isLoading ? <Spinner /> : null}
      {isLoading
        ? Array.from(new Array(10)).map(() => (
            <BlurWrapper>
              <CharacterCard
                name={null}
                homeWorldName={null}
                homeWorldPopulation={null}
              />
            </BlurWrapper>
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
