import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const RegistretedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RegistretedRoute;

RegistretedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string,
};
