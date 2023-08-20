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
              HomeRoute,
              LogInRoute,
              RegisterRoute,
              UserRoute,
              AddPetRoute,
              NoticesRoute,
              NewsRoute,
              OurFriendsRoute,
          { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
    return element;
};

export const HomeRoute = {
  path: '/main',
  element: <MainPage />,
};

export const LogInRoute = {
    path: '/login',
    element: <LogInPage />,
};

export const RegisterRoute = {
    path: '/register',
    element: <RegisterPage />,
};

export const UserRoute = {
    path: '/user',
    element: <UserPage />,
};

export const AddPetRoute = {
path: '/add-pet',
  element: <AddPetPage />,
}

export const NoticesRoute = {
path: '/notices',
    element: <NoticesPage />,
    children: [
        { path: 'sell', element: <TemporaryComponent title="SELL" /> },
        { path: 'lost-found', element: <TemporaryComponent title="lost-found" /> },
        { path: 'in-good-hands', element: <TemporaryComponent title="in-good-hands" /> },
        { path: 'favorite', element: <TemporaryComponent title="favorite" /> },
        {path: 'own', element: <TemporaryComponent title="own" />},
  ]
}
export const NewsRoute = {
path: '/news',
  element: <NewsPage />,
}
export const OurFriendsRoute = {
path: '/friends',
  element: <OurFriendsPage />,
}