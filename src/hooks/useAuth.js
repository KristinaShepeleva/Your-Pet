import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsLoading,
  selectError,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isLoading,
    user,
    error,
  };
};
