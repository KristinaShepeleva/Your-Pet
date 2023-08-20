import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <h2>AppBar</h2>
      <Suspense>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
