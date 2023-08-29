import { useDispatch, useSelector } from 'react-redux';
import { Routes } from './routes';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { selectRefreshToken } from 'redux/auth/authSelectors';

export const App = () => {
  const dispatch = useDispatch();
  const refreshToken = useSelector(selectRefreshToken);
  useEffect(() => {
    dispatch(refreshUser({ refreshToken }));
  }, [dispatch, refreshToken]);

  return (
    <>
      <div>
        <Routes />
      </div>
    </>
  );
};
