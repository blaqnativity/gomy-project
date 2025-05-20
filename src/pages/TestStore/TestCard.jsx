const TestCard = ({ item, onAddToCart }) => {
  return (
    <li className="border p-6 rounded-md shadow-sm bg-white">
      <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
      <p className="mb-2">{item.description}</p>
      <p className="font-semibold">Price: ₦{item.price}</p>
      <p className="italic text-sm text-gray-600">Time: {item.preferredTime}</p>

      {Array.isArray(item.testsIncluded) && item.testsIncluded.length > 0 && (
        <ul className="list-disc list-inside mt-3 text-gray-700">
          {item.testsIncluded.map((test, idx) => (
            <li key={idx}>{test}</li>
          ))}
        </ul>
      )}

      <button
        onClick={onAddToCart}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Add to Cart
      </button>
    </li>
  );
};

export default TestCard;
