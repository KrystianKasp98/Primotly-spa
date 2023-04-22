import { usePeople } from 'api/people/usePeople';

import { PeopleContext } from './PeopleContext';
import { PeopleContextControllerProps } from './PeopleContext.types';

export const PeopleContextController = ({
  children
}: PeopleContextControllerProps) => {
  const contextValue = usePeople();

  return (
    <PeopleContext.Provider value={contextValue}>
      {children}
    </PeopleContext.Provider>
  );
};
