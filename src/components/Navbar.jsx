import { Link } from "react-router-dom";
import { FaCartShopping, FaBars, FaHandHoldingMedical } from "react-icons/fa6";
import { navbarLinks } from "../data/data";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const Navbar = () => {
  // accessing cart state
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // getting user credentials from local storage
  const storedData = JSON.parse(localStorage.getItem("userCredentials"));

  // handle logout function
  const handleLogout = () => {
    localStorage.removeItem("userCredentials");
    toast.success("Logged out successfully");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div>
      <div className="fixed top-0 right-0 py-1 lg:py-2 w-full bg-transparent z-50 dark:bg-gray-900">
        <nav className="max-w-7xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
          <div className="flex items-center justify-between">
            <button>
              <Link to="/" className="flex items-center space-x-2">
                <h2 className="bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 text-transparent bg-clip-text font-bold text-2xl">
                  ALMed
                </h2>
                <FaHandHoldingMedical className="ml-0.5 text-white md:text-3xl" />
              </Link>
            </button>
            <div className="hidden lg:block">
              <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
                {navbarLinks.map((link) => (
                  <li
                    key={link.id}
                    className="relative hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear"
                  >
                    <Link to={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:flex lg:items-center gap-x-2">
              <div className="hidden lg:flex lg:items-center gap-x-4">
                {storedData && storedData.email ? (
                  <>
                    <span className="text-black dark:text-white font-semibold">
                      Welcome, {storedData.username}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="ml-4 rounded-md bg-red-500 text-white px-4 py-2 font-semibold hover:bg-red-600 transition duration-200"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/register"
                      className="flex items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold"
                    >
                      Create Account
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-green-700/90 text-white px-6 py-2.5 font-semibold hover:bg-green-700 transition duration-300"
                    >
                      Login
                    </Link>
                  </>
                )}

                <Link className="relative" to="/cart">
                  <FaCartShopping className="ml-2 text-2xl text-black dark:text-white" />
                  <span className="absolute -top-4 -right-2 text-white">
                    {cartCount}
                  </span>
                </Link>
              </div>
            </div>

            {/* menu button icon */}
            <div className="flex items-center justify-center lg:hidden">
              <button className="focus:outline-none text-slate-200 dark:text-white">
                <FaBars className="text-2xl" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Navbar;
