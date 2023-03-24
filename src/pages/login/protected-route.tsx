import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const authenticated = JSON.parse(localStorage.LOGIN);
  console.log('is loguer', !authenticated, authenticated, !!authenticated, process.env.REACT_APP_BASE_URL)
  if (!authenticated) {
    return <Navigate to="/login" />;
  }
  return <Component {...rest} />;
};

export default ProtectedRoute;