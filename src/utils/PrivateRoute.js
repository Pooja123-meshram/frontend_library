import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = localStorage.getItem("token") !== null;
  return isAuth ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
