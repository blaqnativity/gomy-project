import { useEffect, useState } from "react";
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
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"; // update path if needed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); // clean up on unmount
  }, []);

  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div>
      <div className="fixed top-0 right-0 py-1 lg:py-2 w-full bg-transparent z-50 dark:bg-gray-900">
        <nav className="max-w-7xl mx-auto px-5 py-2.5 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <h2 className="bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 text-transparent bg-clip-text font-bold text-2xl">
                ALMed
              </h2>
              <FaHandHoldingMedical className="ml-0.5 text-white md:text-3xl" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-x-8">
              {/* Nav Links */}
              <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
                {navbarLinks.map((link) => (
                  <li key={link.id}>
                    <Link to={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>

              {/* Show user info if logged in */}
              {currentUser && (
                <span className="text-black dark:text-white font-semibold">
                  Hi, {currentUser.email.slice(0, 10)}...
                </span>
              )}

              {/* Cart */}
              <Link to="/cart" className="relative text-black dark:text-white">
                <FaCartShopping className="text-2xl" />
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>

              {/* Auth Buttons */}
              {currentUser ? (
                <button
                  onClick={handleLogout}
                  className="ml-4 rounded-md bg-red-500 text-white px-4 py-2 font-semibold hover:bg-red-600 transition"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="rounded-md bg-green-700/90 text-white px-6 py-2.5 font-semibold hover:bg-green-700 transition"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Icon & Cart */}
            <div className="flex items-center gap-4 lg:hidden">
              <Link to="/cart" className="relative text-white">
                <FaCartShopping className="text-2xl" />
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              </Link>
              <button
                className="text-white z-50"
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

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-0 right-0 h-fit w-64 bg-white dark:bg-gray-900 z-40 shadow-lg transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6 pt-24 space-y-6 text-black dark:text-white font-semibold">
            {currentUser && (
              <span className="text-sm">Welcome, {currentUser.email}</span>
            )}

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

            <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
              View Cart ({cartCount})
            </Link>

            {currentUser ? (
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
