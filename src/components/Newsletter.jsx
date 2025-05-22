import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-600 to-green-600">
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
          <div className="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <h2 className="text-3xl font-bold leading-8 tracking-tight text-white sm:text-4xl sm:leading-9">
                Get notifications you may have missed.
              </h2>
              <p
                className="max-w-3xl mt-3 text-lg leading-6 text-indigo-200"
                id="newsletter-headline"
              >
                Plus, get the inside scoop on our latest content and updates in
                our monthly newsletter
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form
                target="_blank"
                className="sm:flex"
                aria-labelledby="newsletter-headline"
              >
                <input
                  aria-label="Email address"
                  type="email"
                  required=""
                  className="w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-5 py-3 text-base font-medium leading-6 text-white transition duration-300 ease-in-out bg-green-600/80 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-3 text-sm leading-5 text-indigo-200">
                We will never spam. That's our promise .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
