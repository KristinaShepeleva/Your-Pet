import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container/Container';

export const SharedLayout = () => {
  return (
    <>
      <Container>
      <h2>AppBar</h2>
      <Suspense>
        <main>
          <Outlet />
        </main>
        </Suspense>
        </Container>
    </>
  );
};
