import { FaPhone, FaHome, FaArrowRight } from "react-icons/fa";
import { FaCertificate, FaNotesMedical } from "react-icons/fa6";
import { FcDataProtection } from "react-icons/fc";
import { heroImage } from "./data";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";

const Hero = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <section className="relative  text-white overflow-hidden pt-20">
        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        ></div>

        {/* black overlay */}

        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10 lg:h-[90vh]">
          <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
              <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 bg-clip-text text-transparent">
                AlphaMed
                <br />
                <span className="bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Laboratories
                </span>
              </h1>

              <p className="text-xl mb-5 text-gray-300 ">
                Book Lab Tests Online – Fast, Secure, and Convenient
              </p>
              <p className="text-md tracking-wide mb-5 text-white/70 ">
                Skip the queues and get lab tests done from the comfort of your
                home or at a nearby partner lab. Trusted by thousands.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ">
                <Link
                  to={isLoggedIn ? "/book-test" : "/register"}
                  className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 rounded-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 rounded-lg lg:blur-md blur-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <span className="text-white font-medium">Get Started</span>
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-2/5 md:pl-12 ">
              <div className="bg-black/80 bg-opacity-10 backdrop-filter md:backdrop-blur-lg relative  rounded-xl p-8 shadow-2xl">
                <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
                {/* will come back to this image later */}
                {/* <img
                  src={heroImage}
                  alt="Logo"
                  className="h-16 right-2 top-2 drop_shadow lg:block md:block hidden  absolute"
                /> */}
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <FaCertificate className="text-green-500 mr-3 h-5 w-5" />
                    <span>Certified Partner Labs</span>
                  </li>
                  <li className="flex items-center">
                    <FaNotesMedical className="text-red-500 h-5 w-5 mr-3" />
                    <span>Same-Day or Next-Day Reports</span>
                  </li>
                  <li className="flex items-center">
                    <FaHome className="w-5 h-5 mr-3 text-red-400" />
                    <span> Home Sample Collection</span>
                  </li>
                  <li className="flex items-center">
                    <FaPhone className="w-5 h-5 mr-3 text-blue-400" />
                    <span>24/7 Customer Support</span>
                  </li>
                  <li className="flex items-center">
                    <FcDataProtection className="h-5 w-5 mr-3" />
                    <span>Secure and Confidential</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* curvy shape at the bottom, do not delete */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
        {/* end of curvy shape at the bottom */}
      </section>
    </div>
  );
};

export default Hero;
