import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { encodedToken } = useSelector((state) => state.autho.authoobject);

  return encodedToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
