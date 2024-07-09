import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { account } from "./api/appwrite";
import { Loading } from "./components/Loading";

export const AppRouter = () => {
  document.documentElement.classList.add("light");
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginProtector />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

/******************************************************************************/

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
