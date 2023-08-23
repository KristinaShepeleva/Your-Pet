import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Suspense>
        <Header />
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
