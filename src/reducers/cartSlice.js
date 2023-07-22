import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProductIds: [],
  quantity: 0,
  totalQuantity: 0,
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const index = state.cartProductIds.findIndex((i) => i.id === item.id);
      if (index >= 0) {
        state.cartProductIds[index].quantity++;
      } else {
        state.cartProductIds.push({ ...item, quantity: 1 });
      }
      state.totalQuantity++;
      state.totalPrice += item.price;
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const indexToRemove = state.cartProductIds.findIndex((item) => item.id === itemId);

      if(indexToRemove !== -1){
        state.cartProductIds.splice(indexToRemove, 1);
      }
    },

    clearAllItems: (state) => {
      state.cartProductIds = [];
    },

    incrementQuantity: (state, action) => {
      const id = action.payload;
      const index = state.cartProductIds.findIndex((item) => item.id === id);

      if (index >= 0) {
        state.cartProductIds[index].quantity++;
        state.totalQuantity++;
        state.totalPrice += state.cartProductIds[index].price;
      }
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;

      const index = state.cartProductIds.findIndex((item) => item.id === id);

      if (index >= 0 && state.cartProductIds[index].quantity > 1) {
        state.cartProductIds[index].quantity--;
        state.totalQuantity--;
        state.totalPrice -= state.cartProductIds[index].price;
      } else if (index >= 0 && state.cartProductIds[index].quantity === 1) {
        state.totalQuantity--;
        state.totalPrice -= state.cartProductIds[index].price;
        state.cartProductIds.splice(index, 1);
      }
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  clearAllItems,
  incrementQuantity,
  decrementQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
