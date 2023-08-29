import { useDispatch, useSelector } from 'react-redux';
import { Routes } from './routes';
import { selectRefreshToken } from 'redux/auth/authSelectors';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  const dispatch = useDispatch();
  const refreshToken = useSelector(selectRefreshToken);
  useEffect(() => {
    dispatch(refreshUser({ refreshToken }));
  }, [dispatch, refreshToken]);

  return (
    <>
      <Routes />

      <ToastContainer autoClose={3000} />
    </>
  );
};
