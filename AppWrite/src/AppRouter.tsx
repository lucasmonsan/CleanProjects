import { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { account } from "./api/appwrite";
import { Loading } from "./components/Loading";
import { AnimatePresence } from "framer-motion";

export const AppRouter = () => {
  document.documentElement.classList.add("dark");
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<LoginProtector />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
};

const LoginProtector: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await account.get();
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return <Loading style={isAuthenticated === null ? { opacity: "1" } : { opacity: "0" }} />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export const GoTo = (path: string) => () => {
  const navigate = useNavigate();
  navigate(path);
};
