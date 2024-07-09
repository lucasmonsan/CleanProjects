import { BrowserRouter, Route, Routes } from "react-router-dom"
import { WelcomePage } from "./pages/WelcomePage"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<WelcomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
