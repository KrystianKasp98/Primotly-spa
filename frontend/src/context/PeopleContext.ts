import { createContext } from 'react';

import { PeopleContextValue } from './PeopleContext.types';

export const PeopleContext = createContext<PeopleContextValue | undefined>(
  undefined
);
