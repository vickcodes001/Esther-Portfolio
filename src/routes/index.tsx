import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "../layouts/SharedLayout";
import LandingPage from "../pages/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<SharedLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
