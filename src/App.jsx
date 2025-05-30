import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home/HomeView";
import Store from "./pages/TestStore/Store";
import ErrorPage from "./pages/NotFoundPage";
import DoctorsPage from "./pages/Doctors/DoctorHome";
import Cart from "./pages/TestStore/Cart/Cart";
import Vaccines from "./pages/Vaccine/Vaccines";
import VaccineDetails from "./pages/Vaccine/VaccineDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappApi from "./components/whatsapp/WhatsappApi";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <WhatsappApi />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors-consultation" element={<DoctorsPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/vaccinations" element={<Vaccines />} />
        <Route path="/vaccinations/:id" element={<VaccineDetails />} />
        <Route path="*" element={<ErrorPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
