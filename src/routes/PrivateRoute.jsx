import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '~/context/AuthContext';

function PrivateRoute({ children }) {
  const { userInfo } = useContext(AuthContext);

  if (!userInfo) {
    return <Navigate to="/auth/login" />;
  }

  if (userInfo.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
