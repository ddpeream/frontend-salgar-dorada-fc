import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const loginData = localStorage.getItem('LOGIN');
  const token = loginData ? JSON.parse(loginData) : null;
  // if (!token) {
  //   console.log('Entro Login')
  //   return <Navigate to="/login" />;
  // }
  return <Component {...rest} />;
};

export default ProtectedRoute;
