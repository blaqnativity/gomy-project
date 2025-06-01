import { Link } from "react-router-dom";
import { consultTwo } from "./data";

const CTA = () => {
  return (
    <>
      {/* <!-- Container --> */}
      <div className="relative flex flex-col-reverse items-center mx-auto lg:flex-row-reverse lg:max-w-5xl mt-12 md:my-30 xl:max-w-6xl">
        {/* <!-- Image Column --> */}
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-full max-w-4xl mx-auto rounded-md object-cover"
            src={consultTwo}
            alt="Winding mountain road"
          />
        </div>
        {/* <!-- Close Image Column --> */}

        {/* <!-- Text Column --> */}
        <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          {/* <!-- Text Wrapper --> */}
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
              Affordable consultations, no insurance hassles
            </h2>
            <p className="mt-4 text-gray-700">
              We believe in making healthcare easier, so you can focus on taking
              care of yourself without any added stress.
            </p>
            {/* <!-- Button Container --> */}
            <div className="mt-8">
              <Link
                to="#"
                className="inline-block w-fit text-center text-sm font-medium text-gray-100 rounded-md bg-green-600/90 border-solid border-2 px-3.5 py-2.5 hover:bg-green-600 transition duration-300"
              >
                Book A Consultation
              </Link>
            </div>
          </div>
          {/* <!-- Close Text Wrapper --> */}
        </div>
        {/* <!-- Close Text Column --> */}
      </div>
    </>
  );
};

export default CTA;
