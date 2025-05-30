import { consultOne } from "./data";

const Hero = () => {
  return (
    <>
      <div className="sm:py-24 pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-8 flex justify-center"></div>
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-wider text-gray-700 md:text-6xl">
              Speak to a Doctor, from wherever you are
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Access Quality Healthcare Virtually, Anytime, Anywhere.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#consultType"
                className="rounded-md bg-green-600/90 px-3.5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Book a Consultation
              </a>
            </div>
          </div>
          <div className="mt-10 flow-root sm:mt-20">
            <div className="-m-2 lg:-m-4 lg:rounded-2xl">
              <img
                src={consultOne}
                className="rounded-md md:max-w-4xl h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
