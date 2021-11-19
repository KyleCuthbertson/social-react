import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function PrivateRoute() {

  const { currentUser }: any = useAuth();

  return (
    currentUser ? <Outlet /> : <Navigate to="/login" />
  )
}
