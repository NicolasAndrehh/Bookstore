/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const booklistSlice = createSlice({
  name: 'booklist',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.value = [...state.value, action.payload];
    },

    removeBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booklistSlice.actions;
export default booklistSlice.reducer;
