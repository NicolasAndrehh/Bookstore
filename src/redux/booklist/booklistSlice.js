/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      id: 'item1',
    },
    {
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      id: 'item2',
    },
    {
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      id: 'item3',
    },
  ],
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
