import { Navigate, Outlet } from "react-router-dom";

export const SplashRedirect = () => (sessionStorage.getItem("notFirst") ? <Outlet /> : <Navigate to="/splash" />);
