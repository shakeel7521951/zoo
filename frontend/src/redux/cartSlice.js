import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, product, qty }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add product to cart or increase quantity
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ id: product.id, product, qty: 1 });
      }
    },

    // Decrease quantity (min 1)
    decreaseQty: (state, action) => {
      const id = action.payload;
      const existing = state.items.find((i) => i.id === id);
      if (existing && existing.qty > 1) {
        existing.qty -= 1;
      }
    },

    // Remove from cart (decrease if qty >1, else remove completely)
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        if (state.items[index].qty > 1) {
          state.items[index].qty -= 1;
        } else {
          state.items.splice(index, 1);
        }
      }
    },

    // Buy now functionality
    buyNow: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ id: product.id, product, qty: 1 });
      }
      alert(`Buy Now clicked for ${product.name}`);
    },
  },
});

// Export actions
export const { addToCart, decreaseQty, removeFromCart, buyNow } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
