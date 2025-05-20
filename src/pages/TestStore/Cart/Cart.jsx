import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../../store/cartSlice";
import CartItem from "./CartItem";
import { Link } from "react-router";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (id) => dispatch(removeFromCart(id));
  const handleQuantityChange = (id, quantity) =>
    dispatch(updateQuantity({ id, quantity: Number(quantity) }));

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <div className="sm:flex my-10">
        {/* Cart Items Section */}
        <div className="w-full sm:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
          </div>

          {!cartItems.length ? (
            <p className="text-center text-gray-500 mt-10">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={handleRemove}
                onQuantityChange={handleQuantityChange}
              />
            ))
          )}

          <Link
            to="/store"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            ← Continue Shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="w-full sm:w-1/4 px-8 py-10 bg-gray-50">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5 tracking-wider">
            <span className="font-semibold text-sm uppercase">
              Items ({cartItems.length})
            </span>
            <span className="font-semibold text-sm">₦{total.toFixed(2)}</span>
          </div>
          <div className="border-t mt-8 tracking-wider">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total + Shipping</span>
              <span>₦{total.toFixed(2)}</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
