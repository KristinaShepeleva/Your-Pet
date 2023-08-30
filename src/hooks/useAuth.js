import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectError,
  selectUserId,
  selectIsAuthLoading,
  selectRefreshToken,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAuthLoading = useSelector(selectIsAuthLoading);
  const error = useSelector(selectError);
  const user = useSelector(selectUser);
  const userId = useSelector(selectUserId);
  const refreshToken = useSelector(selectRefreshToken);
  return {
    isLoggedIn,
    isAuthLoading,
    user,
    error,
    userId,
    refreshToken,
  };
};
