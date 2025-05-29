import { howItWorks } from "./data";

const Process = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="text-center my-20">
          <h1 className="text-3xl font-bold text-gray-700/90">How it works</h1>
        </div>
        <div className="grid grid-cols-1 items-start justify-start md:grid-cols-4 sm:grid-cols-3 gap-10">
          {howItWorks.map((item) => (
            <div
              key={item.id}
              className="text-start md:w-[250px] flex gap-6 flex-col"
            >
              {/* img */}
              <div>
                <img
                  className="md:w-[800px] rounded-lg"
                  src={item.imageUrl}
                  alt={item.title}
                />
              </div>
              {/* content */}
              <div className="flex flex-col items-start gap-2">
                <h2 className="text-gray-700/90 text-lg font-bold">
                  {item.title}
                </h2>
                <p className="text-gray-500 font-bold">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Process;
