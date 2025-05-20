import TestStoreTabs from "./TestStoreTabs";

const AllTestsPage = () => {
  return (
    <>
      <div className="text-center my-20 text-gray-700 flex flex-col gap-6 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold">
          Explore available health packages
        </h1>
        <p className="text-lg font-medium tracking-wide">
          Exploring the available options, find a health package that aligns
          with your specific needs and preferences.
        </p>
      </div>

      <div>
        <TestStoreTabs />
      </div>
    </>
  );
};

export default AllTestsPage;
