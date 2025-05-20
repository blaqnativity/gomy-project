import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = JSON.parse(localStorage.getItem("userCredentials"));

  const isLoggedIn = user?.email && user?.password;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
