type PersonResDto = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export type PeoplePagination = {
  next: string | null;
  previous: string | null;
};

export type PeopleResDto = PeoplePagination & {
  count: number;
  results: PersonResDto[];
};

export type PlanetResDto = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type FilmResDto = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

type PersonHomeworld = {
  name: string;
  population: string;
};

export type PersonFilm = {
  title: string;
  release_date: string;
  opening_crawl: string; // limited to 130 characters, fix displaying opening_crawl
};

export type StoredFilm = PersonFilm & {
  url: string;
};

export type PersonData = {
  name: string;
  homeworld: PersonHomeworld;
  films: PersonFilm[];
};
