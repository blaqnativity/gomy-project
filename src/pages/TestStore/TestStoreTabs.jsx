import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import TestCard from "./TestCard";
import Loader from "./Loader";
import Error from "./Error";

const TestStoreTabs = () => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("packages");

  const [testPackages, setTestPackages] = useState([]);
  const [singleTests, setSingleTests] = useState([]);

  const [loading, setLoading] = useState({ packages: true, singleTests: true });
  const [error, setError] = useState({ packages: null, singleTests: null });

  useEffect(() => {
    axios
      .get("https://6824c78a0f0188d7e72ac57c.mockapi.io/test_packages")
      .then((res) => setTestPackages(res.data))
      .catch(() =>
        setError((prev) => ({
          ...prev,
          packages: "Failed to load test packages.",
        }))
      )
      .finally(() => setLoading((prev) => ({ ...prev, packages: false })));

    axios
      .get("https://6824c78a0f0188d7e72ac57c.mockapi.io/single_tests")
      .then((res) => setSingleTests(res.data))
      .catch(() =>
        setError((prev) => ({
          ...prev,
          singleTests: "Failed to load single tests.",
        }))
      )
      .finally(() => setLoading((prev) => ({ ...prev, singleTests: false })));
  }, []);

  const tabContent = {
    packages: {
      data: testPackages,
      isLoading: loading.packages,
      error: error.packages,
      onAdd: (item) =>
        dispatch(
          addToCart({
            id: item.id,
            name: item.title,
            price: item.price,
            description: item.description,
            testsIncluded: item.testsIncluded,
            type: "package",
          })
        ),
    },
    singleTests: {
      data: singleTests,
      isLoading: loading.singleTests,
      error: error.singleTests,
      onAdd: (item) =>
        dispatch(
          addToCart({
            id: item.id,
            name: item.title,
            price: item.price,
            description: item.description,
            type: "single",
          })
        ),
    },
  };

  const current = tabContent[activeTab];

  return (
    <div className="max-w-7xl mx-auto p-8">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["packages", "singleTests"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-semibold ${
              activeTab === tab
                ? "bg-green-700 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab === "packages" ? "Test Packages" : "Single Tests"}
          </button>
        ))}
      </div>

      {/* Content */}
      {current.isLoading ? (
        <Loader />
      ) : current.error ? (
        <Error message={current.error} />
      ) : (
        <ul className="space-y-6">
          {current.data.map((item) => (
            <TestCard
              key={item.type}
              item={item}
              onAddToCart={() => current.onAdd(item)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TestStoreTabs;
