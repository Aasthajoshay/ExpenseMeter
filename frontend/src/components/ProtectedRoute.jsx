import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth"; // adjust path if needed

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
