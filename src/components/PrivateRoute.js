import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  // const shouldRedirect = !isLoggedIn && !isRefreshing;
  return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};
