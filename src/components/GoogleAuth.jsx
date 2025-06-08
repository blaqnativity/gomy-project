import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success(`Welcome ${user.displayName}`);
      console.log("User info:", user);
      navigate("/");
    } catch (error) {
      console.error("Google login error:", error.message);
      toast.error(`Google login failed, ${error.message}`);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <FaGoogle className="mr-2 text-xl" />
      Sign in with Google
    </button>
  );
};

export default GoogleLogin;
