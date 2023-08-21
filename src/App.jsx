import { Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage/MainPage';
import SharedLayout from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Main />} />
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </>
  );
};
