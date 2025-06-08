import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaGoogle } from "react-icons/fa6";
import { toast } from "react-toastify";
import GoogleAuth from "../components/GoogleAuth";

const Register = () => {
  const navigate = useNavigate();
  // setup validation schema using yup
  const schema = yup.object().shape({
    username: yup
      .string()
      .min(6, "Username must be at least 6 characters")
      .max(12)
      .required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(12)
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      // Optional: Save username to Firestore or update profile
      console.log("User created:", userCredential.user);

      toast.success("Registration successful!");
      reset();
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error("Error registering:");
      toast.error(`Invalid user credentials ${error.message}`);
    }
  };

  // using the useForm hook in react
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 max-w-lg bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="p-8">
          {/* <!-- Header Section --> */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 leading-tight">
              Create Your Account
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Already have an account?
              <Link
                to="/login"
                className="ml-1 text-blue-500 hover:underline font-medium"
              >
                Login
              </Link>
            </p>
          </div>

          {/* <!-- Social Login Buttons --> */}
          <div className="space-y-3">
            <GoogleAuth />
          </div>

          {/* <!-- Divider Section --> */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-sm text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* <!-- Register Form --> */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* <!-- Username Input --> */}
            <div className="space-y-2 bg-white rounded-lg max-w-md mx-auto py-2">
              <div className="relative bg-inherit">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="peer bg-transparent h-12 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 ring-gray-300 px-4 focus:ring-sky-500 focus:outline-none focus:border-sky-600 transition-all"
                  placeholder="Enter your email"
                  {...register("username")}
                />
                <label
                  for="email"
                  className="absolute cursor-text left-4 -top-3 text-sm text-gray-600 bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Enter your Username
                </label>
              </div>

              <span className="text-red-500/70">
                {errors.username?.message}
              </span>
            </div>
            {/* <!-- Email Input --> */}
            <div className="space-y-2 bg-white rounded-lg max-w-md mx-auto py-2">
              <div className="relative bg-inherit">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="peer bg-transparent h-12 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 ring-gray-300 px-4 focus:ring-sky-500 focus:outline-none focus:border-sky-600 transition-all"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <label
                  for="email"
                  className="absolute cursor-text left-4 -top-3 text-sm text-gray-600 bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Enter your email
                </label>
              </div>

              <span className="text-red-500/70">{errors.email?.message}</span>
            </div>

            {/* <!-- Password Input --> */}
            <div className="space-y-2 bg-white rounded-lg max-w-md mx-auto py-2">
              <div className="relative bg-inherit">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="peer bg-transparent h-12 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 ring-gray-300 px-4 focus:ring-sky-500 focus:outline-none focus:border-sky-600 transition-all"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <label
                  for="password"
                  className="absolute cursor-text left-4 -top-3 text-sm text-gray-600 bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Password
                </label>
              </div>

              <span className="text-red-500/70">
                {errors.password?.message}
              </span>
            </div>

            {/* <!-- confirm Password Input --> */}
            <div className="bg-white rounded-lg space-y-2 max-w-md mx-auto py-2">
              <div className="relative bg-inherit">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="peer bg-transparent h-12 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 ring-gray-300 px-4 focus:ring-sky-500 focus:outline-none focus:border-sky-600 transition-all"
                  placeholder="Enter your password"
                  {...register("confirmPassword")}
                />
                <label
                  for="confirmPassword"
                  className="absolute cursor-text left-4 -top-3 text-sm text-gray-600 bg-white px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                >
                  Confirm password
                </label>
              </div>

              <span className="text-red-500/70">
                {errors.confirmPassword?.message}
              </span>
            </div>

            {/* <!-- Submit Button --> */}
            <button
              type="submit"
              className="w-full p-3 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none transition-colors"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
