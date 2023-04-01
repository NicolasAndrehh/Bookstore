/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { addBook, getBooklist, removeBook } from './actions';

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: '',
};

const booklistSlice = createSlice({
  name: 'booklist',
  initialState,
  extraReducers: (builder) => {
    builder
      // Get Booklist
      .addCase(getBooklist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooklist.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      })
      .addCase(getBooklist.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      })

      // Add book
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(addBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      })

      // Remove book
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(removeBook.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload;
      });
  },
});

export default booklistSlice.reducer;
