import { useContext } from 'react';

import { PeopleContext } from './PeopleContext';

export const usePeopleContext = () => {
  const ctx = useContext(PeopleContext);

  if (!ctx) {
    throw new Error(
      'usePeopleContext can only be used inside PeopleContextController.'
    );
  }

  return ctx;
};
