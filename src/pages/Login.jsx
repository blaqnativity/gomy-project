import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa6";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must not exceed 12 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  // using the useForm hook in react
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const storedData = JSON.parse(localStorage.getItem("userCredentials"));
    if (storedData) {
      if (
        data.email === storedData.email &&
        data.password === storedData.password
      ) {
        toast.success("Login successful!");
        navigate("/");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        reset(); // Reset form after submission
      } else {
        toast.error("Invalid email or password");
      }
    } else {
      toast.error("User not found. Please create an account to get started.");
      // navigate("/register");
    }
    reset(); // Reset form after submission
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 max-w-lg bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="p-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 leading-tight">
              Login to your account
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-500 hover:underline font-medium"
              >
                Sign Up
              </Link>
            </p>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none transition-colors">
              <FaGoogle className="mr-2 text-xl" />
              Sign in with Google
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div className="bg-white rounded-lg max-w-md mx-auto py-2">
              <div className="relative bg-inherit">
                <input
                  type="email"
                  id="email"
                  className="peer bg-transparent h-12 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 ring-gray-300 px-4 focus:ring-sky-500 focus:outline-none transition-all"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <label
                  htmlFor="email"
                  className="absolute cursor-text left-4 -top-3 text-sm text-gray-600 bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Enter your email
                </label>
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="bg-white rounded-lg max-w-md mx-auto py-2">
              <div className="relative bg-inherit">
                <input
                  type="password"
                  id="password"
                  className="peer bg-transparent h-12 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 ring-gray-300 px-4 focus:ring-sky-500 focus:outline-none transition-all"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <label
                  htmlFor="password"
                  className="absolute cursor-text left-4 -top-3 text-sm text-gray-600 bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Password
                </label>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
