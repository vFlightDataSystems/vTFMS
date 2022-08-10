import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { vatsimTokenSelector } from "../redux/slices/authSlice";
import { useAppSelector } from "../redux/hooks";

const PrivateRoute = () => {
  const token = useAppSelector(vatsimTokenSelector);

  // User needs a valid session and an ARTCC id before viewing TFMS
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
