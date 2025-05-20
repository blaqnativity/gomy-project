import { FaBriefcaseMedical } from "react-icons/fa6";
import { typesConsultation } from "../../data/data";

const ConsultType = () => {
  return (
    <>
      <section className="p-4 md:p-8">
        <div className="py-8 max-w-screen-xl mx-auto lg:py-16 ">
          <div className="text-center pb-12 md:pb-20  text-gray-700">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Virtual or Physical
            </h2>
            <p className="text-xl">
              Enjoy convenient medical consultations and doorstep medication
              delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {typesConsultation.map((item) => (
              <div className="bg-teal-100/10 border border-gray-200 rounded shadow text-gray-600 p-10 space-y-4">
                <span className="text-green-700/90 text-2xl md:text-3xl block">
                  <FaBriefcaseMedical />
                </span>
                <h3 className="text-3xl font-bold text-gray-600">
                  {item.title}
                </h3>
                <h4 className="md:text-lg font-light">{item.desc}</h4>
                <span className="text-2xl font-extrabold tracking-wide">
                  ₦{item.price}
                </span>
                <span className="font-bold text-gray-600 tracking-wider block mt-4">
                  Per consultation
                </span>

                <ul className="font-light tracking-wide space-y-3 text-sm">
                  {item.details.map((test) => (
                    <li className="list-disc ml-4">{test.name}</li>
                  ))}
                </ul>

                <button className="py-3 px-6 bg-green-700/90 hover:bg-green-700 transition duration-300 text-white font-bold rounded">
                  Book Consultation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ConsultType;
