import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div className="h-[50vh] w-full flex justify-center items-center">
        <div className="max-w-5xl mx-auto flex flex-col gap-6 text-center items-center">
          <h2 className="text-gray-700 font-bold text-3xl md:text-5xl">
            Page Not Found
          </h2>
          <span className="tracking-wider text-xl">
            We think you're in the wrong place!!!
          </span>
          <Link
            to="/"
            className="rounded-md text-md font-bold bg-green-700/90 hover:bg-green-700 px-6 py-3 text-white transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
