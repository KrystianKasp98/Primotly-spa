import {
  createBrowserRouter,
  RouterProvider,
  RouteObject
} from 'react-router-dom';

import { Home } from 'pages/home/Home';
import { Character } from 'pages/character/Character';
import { PeopleContextController } from 'context/PeopleContextController';

import { ROUTE } from '../../constants';

const routesConfig: RouteObject[] = [
  {
    path: ROUTE.HOME,
    element: <Home />
  },
  {
    path: ROUTE.CHARACTER,
    element: <Character />
  }
];

const router = createBrowserRouter(routesConfig);

export const App = () => {
  return (
    <PeopleContextController>
      <RouterProvider router={router} />;
    </PeopleContextController>
  );
};
