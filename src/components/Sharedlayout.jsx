import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Loader from './Loader/Loader';
import { useAuth, useNotices } from 'hooks';

export const SharedLayout = () => {
  const { isAuthLoading } = useAuth();
  const { isNotLoading } = useNotices();
  const shouldLoading = isAuthLoading || isNotLoading;
  return (
    <>
      <Suspense>
        <Header />
        <main>
          {shouldLoading && <Loader />}
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
