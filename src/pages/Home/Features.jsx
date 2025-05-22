import { features } from "../../data/data";

const Features = () => {
  return (
    <>
      <div className="bg-gray-50">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* <!-- Section Header --> */}
            <div className="text-center mb-12">
              <span className="text-green-600 font-semibold text-lg">
                WHY CHOOSE US
              </span>
              <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Key Features
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                Your Test, Your Time, Your Place
              </p>
            </div>

            {/* <!-- Features Grid --> */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* <!-- Feature --> */}
              {features.map((item) => (
                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <img
                      className="h-full w-auto object-cover rounded-full"
                      src={item.imageUrl}
                      alt="feature_img"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;
