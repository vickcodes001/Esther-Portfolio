import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "../layouts/SharedLayout";
import LandingPage from "../pages/LandingPage";
import Tranzakt from "../pages/projects/tranzakt/Tranzakt";
import Capalyze from "../pages/projects/Capalyze";
import Paws from "../pages/projects/Paws";
import Vuno from "../pages/projects/Vuno";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tranzakt" element={<Tranzakt />} />
        <Route path="/capalyze" element={<Capalyze />} />
        <Route path="/paws" element={<Paws />} />
        <Route path="/vuno" element={<Vuno />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
