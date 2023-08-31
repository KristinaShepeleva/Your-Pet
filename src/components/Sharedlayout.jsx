import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Loader from './Loader/Loader';
import { useAuth, useNotices } from 'hooks';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/pets/selectors';

export const SharedLayout = () => {
  const { isAuthLoading } = useAuth();
  const { isNotLoading } = useNotices();
  const isPetsLoading = useSelector(selectIsLoading);
  
  const shouldLoading = isAuthLoading || isNotLoading || isPetsLoading;
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        
        <main>
          {shouldLoading && <Loader />}
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
