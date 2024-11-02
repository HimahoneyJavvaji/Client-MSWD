import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AppContext from './AppContext'; 

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AppContext);

  // If the user is not logged in, redirect to the login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, render the children components
  return children;
};

export default ProtectedRoute;
