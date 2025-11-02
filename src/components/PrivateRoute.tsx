import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

interface PrivateRouteProps {
  component: React.FC;
  path: string;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, path, exact }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  return isAuthenticated ? (
    <Route path={path} exact={exact} component={Component} />
  ) : (
    <Redirect to="/" />
  );
};

export default PrivateRoute;
