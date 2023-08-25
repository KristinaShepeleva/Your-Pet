import PrivateRoute from 'components/PrivateRoute';
import RegistretedRoute from 'components/RegistretedRoute';

import { SharedLayout } from 'components/Sharedlayout';
import { TemporaryComponent } from 'components/TemporaryComponent';
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/MainPage/MainPage'));
const LogInPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const UserPage = lazy(() => import('./pages/UserPage/UserPage'));
const AddPetPage = lazy(() => import('./pages/AddPetPage/AddPetPage'));
const NoticesPage = lazy(() => import('./pages/NoticesPage/NoticesPage'));
const NewsPage = lazy(() => import('./pages/NewsPage/NewsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const OurFriendsPage = lazy(() =>
  import('./pages/OurFriendsPage/OurFriendsPage')
);

export const Routes = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <SharedLayout />,
      children: [
        { index: true, element: <MainPage /> },
        LogInRoute,
        RegisterRoute,
        UserRoute,
        AddPetRoute,
        NoticesRoute,
        NewsRoute,
        OurFriendsRoute,
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);
  return element;
};

export const LogInRoute = {
  path: '/login',
  element: <RegistretedRoute component={LogInPage} redirectTo="/user" />,
};

export const RegisterRoute = {
  path: '/register',
  element: <RegistretedRoute component={RegisterPage} redirectTo="/user" />,
};

export const UserRoute = {
  path: '/user',
  element: <PrivateRoute component={UserPage} redirectTo="/login" />,
};

export const AddPetRoute = {
  path: '/add-pet',
  element: <AddPetPage />,
};

export const NoticesRoute = {
  path: '/notices',
  element: <NoticesPage />,
  children: [
    { path: 'sell', element: <TemporaryComponent /> },
    { path: 'lost-found', element: <TemporaryComponent /> },
    {
      path: 'in-good-hands',
      element: <TemporaryComponent />,
    },
    { path: 'favorite', element: <TemporaryComponent /> },
    { path: 'own', element: <TemporaryComponent /> },
  ],
};
export const NewsRoute = {
  path: '/news',
  element: <NewsPage />,
};
export const OurFriendsRoute = {
  path: '/friends',
  element: <OurFriendsPage />,
};
