import {
  createBrowserRouter,
  RouterProvider,
  RouteObject
} from 'react-router-dom';

import { Home } from 'pages/home/Home';

import { ROUTE } from '../../utils/constants';

const routesConfig: RouteObject[] = [
  {
    path: ROUTE.HOME,
    element: <Home />
  }
];

const router = createBrowserRouter(routesConfig);

export const App = () => {
  return <RouterProvider router={router} />;
};
