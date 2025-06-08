import { vaccines } from "./data";
import Vaccine from "./Vaccine";
import NewsLetter from "../../components/NewsLetter";

const Vaccines = () => {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center my-10 pt-10 text-gray-700 flex flex-col gap-6 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold">
            Vaccination at your Doorstep
          </h1>
          <p className="text-lg font-medium tracking-wide">
            Vaccination is one of the most effective ways to protect yourself
            and your loved ones from a range of preventable diseases.
          </p>
        </div>

        <div className="flex flex-col md:ml-8 gap-1 p-4 md:p-0 mb-10">
          <h2 className="">All Vaccinations</h2>

          {/* green underline */}
          <div className="h-[3px] rounded-full w-[100px] bg-green-700/70 mb-6"></div>

          {/* vaccines list */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {vaccines.map((vaccine) => (
              <Vaccine key={vaccine.id} vaccine={vaccine} />
            ))}
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default Vaccines;
