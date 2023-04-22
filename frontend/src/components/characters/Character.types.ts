import { PersonFilm } from '../../api/people/people.types';

export type CharacterCardProps = {
  name: string | null;
  homeWorldName: string | null;
  homeWorldPopulation: string | null;
  films: PersonFilm[] | null;
};
