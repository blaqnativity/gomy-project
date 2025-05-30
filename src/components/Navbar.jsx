import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCartShopping,
  FaBars,
  FaHandHoldingMedical,
  FaXmark,
} from "react-icons/fa6";
import { navbarLinks } from "./data";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Accessing cart state
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Getting user credentials from local storage
  const storedData = JSON.parse(localStorage.getItem("userCredentials"));

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("userCredentials");
    toast.success("User logged out successfully");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div>
      <div className="fixed top-0 right-0 py-1 lg:py-2 w-full bg-transparent z-50 dark:bg-gray-900">
        <nav className="max-w-7xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <h2 className="bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 text-transparent bg-clip-text font-bold text-2xl">
                ALMed
              </h2>
              <FaHandHoldingMedical className="ml-0.5 text-white md:text-3xl" />
            </Link>

            {/* Desktop Auth (Username first) & Cart */}
            <div className="hidden lg:flex items-center gap-x-4">
              {/* Desktop Nav Links */}
              <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
                {navbarLinks.map((link) => (
                  <li
                    key={link.id}
                    className="relative hover:underline hover:underline-offset-4 transition-all duration-100 ease-linear"
                  >
                    <Link to={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>

              {storedData && storedData.email && (
                <span className="text-black dark:text-white font-semibold">
                  Welcome, {storedData.username}
                </span>
              )}

              {/* Cart Icon */}
              <Link to="/cart" className="relative text-black dark:text-white">
                <FaCartShopping className="text-2xl" />
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>

              {/* Desktop Auth Buttons */}
              {storedData && storedData.email ? (
                <button
                  onClick={handleLogout}
                  className="ml-4 rounded-md bg-red-500 text-white px-4 py-2 font-semibold hover:bg-red-600 transition duration-200"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="rounded-md bg-green-700/90 text-white px-6 py-2.5 font-semibold hover:bg-green-700 transition duration-300"
                  >
                    Login
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Cart and Menu Button */}
            <div className="flex items-center gap-4 lg:hidden">
              <Link to="/cart" className="relative text-white">
                <FaCartShopping className="text-2xl" />
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>
              <button
                className="text-white focus:outline-none z-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <FaXmark className="text-2xl" />
                ) : (
                  <FaBars className="text-2xl" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Slide-In Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6 pt-24 space-y-6 text-black dark:text-white font-semibold">
            {/* Show username first */}
            {storedData && storedData.email && (
              <span className="text-sm">Welcome, {storedData.username}</span>
            )}

            {/* Mobile Nav Links */}
            {navbarLinks.map((link) => (
              <Link
                key={link.id}
                to={link.url}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:underline"
              >
                {link.name}
              </Link>
            ))}

            {/* View Cart */}
            <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
              View Cart ({cartCount})
            </Link>

            {/* Auth Buttons */}
            {storedData && storedData.email ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="text-red-600 hover:underline"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  Create Account
                </Link>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
