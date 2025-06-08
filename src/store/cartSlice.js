import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(
        (item) =>
          item.id === action.payload.id && item.type === action.payload.type
      );
      if (item) {
        item.quantity += 1;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        state.items.push(newItem);
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action) => {
      const { id, type } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.type === type)
      );
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity = quantity;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
