import { Link } from "react-router-dom";

const Vaccine = ({ vaccine }) => {
  return (
    <div
      key={vaccine.id}
      className="shadow-sm rounded-lg border border-gray-900/10 p-6 bg-white flex flex-col gap-3"
    >
      <img
        src={vaccine.image}
        alt={vaccine.name}
        className="object-cover w-20 h-20"
      />
      <h1 className="text-md text-gray-700 font-bold">{vaccine.name}</h1>
      <p className="text-gray-700">{vaccine.description.slice(0, 80)}...</p>
      <p className="text-red-700/60 text-sm">Dosage: {vaccine.dosage}</p>
      {/* <p className="text-red-700/60 text-sm">
        Availability: {vaccine.availability}
      </p> */}

      <Link
        to={`/vaccinations/${vaccine.id}`}
        className="text-gray-800/60 text-sm font-mono"
        href="#"
      >
        more details
      </Link>
    </div>
  );
};

export default Vaccine;
