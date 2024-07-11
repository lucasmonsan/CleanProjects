import { Route, Routes, useLocation } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { AnimatePresence } from "framer-motion";
import { Splash } from "../pages/Splash";
import { Welcome } from "../pages/Welcome";
import { LoginProtector } from "./LoginProtector";
import { SplashRedirect } from "./SplashRedirect";

export const AppRouter = () => {
  document.documentElement.classList.add("dark");
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<SplashRedirect />}>
          <Route element={<LoginProtector />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="welcome" element={<Welcome />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="splash" element={<Splash />} />
      </Routes>
    </AnimatePresence>
  );
};
