import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // Only check if user exists; backend does not return a token
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If there's children passed (like <ProtectedRoute><Dashboard /></ProtectedRoute>)
  // Or if it's used as a layout route (<Outlet />)
  return children ? children : <Outlet />;
}
