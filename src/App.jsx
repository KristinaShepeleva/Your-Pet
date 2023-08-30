import { useDispatch } from 'react-redux';
import { Routes } from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { fetchRefreshToken, getCurrentUser } from 'redux/auth/authOperations';
import { useAuth } from 'hooks';

export const App = () => {
  const dispatch = useDispatch();
  const { refreshToken } = useAuth();
  useEffect(() => {
    dispatch(fetchRefreshToken({ refreshToken }));
    dispatch(getCurrentUser());
  }, [dispatch, refreshToken]);

  return (
    <>
      <Routes />

      <ToastContainer autoClose={3000} />
    </>
  );
};
