import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const loginData = localStorage.getItem('LOGIN');
  const token = loginData ? JSON.parse(loginData) : null;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;
