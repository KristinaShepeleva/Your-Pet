import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectError,
  selectUserId,
  selectIsAuthLoading,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isAuthLoading = useSelector(selectIsAuthLoading);
  const error = useSelector(selectError);
  const user = useSelector(selectUser);
  const userId = useSelector(selectUserId);
  return {
    isLoggedIn,
    isAuthLoading,
    user,
    error,
    userId,
  };
};
