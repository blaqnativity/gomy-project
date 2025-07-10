// screens and route pages
import Home from "../pages/Home/HomeView";
import Store from "../pages/TestStore/Store";
import ErrorPage from "../pages/NotFoundPage";
import DoctorsPage from "../pages/Doctors/DoctorHome";
import Cart from "../pages/TestStore/Cart/Cart";
import Vaccines from "../pages/Vaccine/Vaccines";
import VaccineDetails from "../pages/Vaccine/VaccineDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "../utils/ProtectedRoutes";

// layout
import MainLayout from "../layouts/MainLayout";

// defining routes
const appRoutes = [
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/book-test", element: <Store /> },
      { path: "/doctors-consultation", element: <DoctorsPage /> },
      { path: "/vaccinations", element: <Vaccines /> },
      { path: "/vaccinations/:id", element: <VaccineDetails /> },

      // ✅ Only this is protected
      {
        element: <ProtectedRoute />,
        children: [{ path: "/cart", element: <Cart /> }],
      },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <ErrorPage /> },
];

export default appRoutes;
