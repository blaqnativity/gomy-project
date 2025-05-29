import { FaWhatsapp } from "react-icons/fa";

const Vaccine = ({ vaccine }) => {
  // WhatsApp API details
  const phoneNumber = "+2348153127462";
  const message = `Hello, I want to inquire about ${vaccine.name} vaccine.`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <div
      key={vaccine.id}
      className="shadow-sm rounded-lg p-6 bg-white flex flex-col gap-3"
    >
      <h1 className="text-md text-gray-700 font-bold">{vaccine.name}</h1>
      <p className="text-gray-700">{vaccine.description.slice(0, 80)}...</p>
      <p className="text-red-700/60 text-sm">Dosage: {vaccine.dosage}</p>
      <p className="text-red-700/60 text-sm">
        Availability: {vaccine.availability}
      </p>

      <a className="text-gray-800/60 text-sm font-mono" href="#">
        more details...
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-700/70 text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-green-700 transition duration-300 flex items-center justify-center gap-2"
      >
        <span>order on request</span>
        <FaWhatsapp className="text-xl" />
      </a>
    </div>
  );
};

export default Vaccine;
