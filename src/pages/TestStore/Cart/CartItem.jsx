const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="flex justify-between items-start border-t py-6">
      <div className="w-full space-y-1">
        <p className="font-semibold text-lg">{item.name}</p>
        <p className="text-sm text-gray-500">{item.description}</p>
        <ul className="space-y-1 text-sm text-gray-500">
          {item.testsIncluded && item.testsIncluded.length > 0 ? (
            item.testsIncluded.map((test, index) => <li key={index}>{test}</li>)
          ) : (
            <li className="text-red-500/50">Single Test</li>
          )}
        </ul>

        <div className="flex items-center space-x-4 mt-2">
          <label htmlFor={`qty-${item.id}`} className="text-sm">
            Qty:
          </label>
          <select
            id={`qty-${item.id}`}
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, e.target.value)}
            className="border rounded px-2 py-1 text-sm"
          >
            {[1, 2, 3, 4, 5].map((qty) => (
              <option key={qty} value={qty}>
                {qty}
              </option>
            ))}
          </select>
          <button
            className="text-red-500 text-sm underline"
            onClick={() => onRemove({ id: item.id, type: item.type })} // pass object
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-right font-bold text-gray-800 tracking-wider">
        ₦{item.price * item.quantity}
      </div>
    </div>
  );
};

export default CartItem;
