import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const authenticated = JSON.parse(localStorage.LOGIN);
  console.log('is loguer', !authenticated, authenticated, !!authenticated)
  if (!authenticated?.trimStart()) {
    return <Navigate to="/login" />;
  }
  return <Component {...rest} />;
};

export default ProtectedRoute;