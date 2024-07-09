import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { RouteProtector } from "./components/RouteProtector";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RouteProtector />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
