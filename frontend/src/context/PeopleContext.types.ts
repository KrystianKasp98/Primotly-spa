import { ReactNode } from 'react';

import { PeoplePagination, PersonData } from '../api/people/people.types';

export type PeopleContextValue = {
  data: PersonData[];
  fetch: (param: string) => Promise<void>;
  paginateNext: () => Promise<void>;
  paginatePrevious: () => Promise<void>;
  pagination: PeoplePagination;
  isLoading: boolean;
  errorMessage: string | null;
};

export type PeopleContextControllerProps = {
  children: ReactNode;
};
