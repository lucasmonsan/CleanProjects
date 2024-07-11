import { useEffect, useState } from "react";
import { account } from "../api/appwrite";
import { Loading } from "../components/Loading";
import { Navigate, Outlet } from "react-router-dom";

export const LoginProtector = () => {
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

  if (isLoading) return <Loading style={isAuthenticated === null ? { opacity: "1" } : { opacity: "0" }} />;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
