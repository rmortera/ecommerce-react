import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrder(state, action) {
      // payload = newOrder
      state.order.push(action.payload);
    },
  },
});

export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer;

export const getOrder = (state) => state.order.order;
