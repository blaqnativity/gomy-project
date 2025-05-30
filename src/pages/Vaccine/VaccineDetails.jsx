import { useParams, Link } from "react-router-dom";
import { vaccines } from "./data";
import { FaWhatsapp } from "react-icons/fa";
import { virusImage } from "./data";

const VaccineDetails = () => {
  const { id } = useParams();
  const vaccine = vaccines.find((v) => String(v.id) === id);

  if (!vaccine) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-center text-red-500 text-xl font-bold">
          Vaccine not found.
        </p>
      </div>
    );
  }

  const phoneNumber = "+2348153127462";
  const message = `Hello, I want to speak with a support-agent regarding the ${vaccine.name} details.`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="mt-10 md:mt-30 grid grid-cols-1 md:grid-cols-2 max-w-7xl p-6 mx-auto">
      <div>
        <img src={virusImage} alt={vaccine.name} />
      </div>
      <div className="flex items-start flex-col gap-3">
        <h2 className="text-lg md:text-xl font-bold text-green-900">
          {vaccine.name}
        </h2>
        <h4 className="max-w-lg text-gray-800/70">{vaccine.description}</h4>
        <span className="text-green-900/90 font-medium">
          Who is this vaccine for?
        </span>
        <span className="font-bold text-gray-800/60">
          {vaccine.targetGroup}
        </span>
        <div className="flex flex-col items-start gap-2">
          <span className="text-green-900/90 font-bold">
            When is this vaccine available?
          </span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="md:block text-green-500 hover:bg-green-500 rounded-full hover:text-white p-2 transition duration-300 z-100 text-xl"
          >
            <FaWhatsapp />
          </a>

          <span className="text-gray-700/60 tracking-tighter font-bold">
            {vaccine.availability}
          </span>
        </div>
      </div>

      <Link
        to="/vaccinations"
        className="tracking-wider text-gray-800/70 hover:text-gray-800 font-bold mt-8 duration-300 transition"
      >
        Go Back
      </Link>
    </div>
  );
};

export default VaccineDetails;
