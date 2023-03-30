import { configureStore } from '@reduxjs/toolkit';
import booklistSlice from './booklist/booklistSlice';
import categoriesSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    booklist: booklistSlice,
    categories: categoriesSlice,
  },
});

export default store;
