import {
  createBrowserRouter,
  RouterProvider,
  RouteObject
} from 'react-router-dom';

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <div>test</div>
  },
  {
    path: 'character/:id',
    element: <div>character</div>
  }
];

const router = createBrowserRouter(routesConfig);

export const App = () => {
  return <RouterProvider router={router} />;
};
