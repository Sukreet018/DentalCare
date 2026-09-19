import { Route, Routes } from "react-router-dom";
import Appointment from "../pages/Appointment";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;