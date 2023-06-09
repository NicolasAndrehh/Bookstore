import { createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const APP_ID = 'ATZrglcJ1nPcZ4a09o9u';
export const getBooklist = createAsyncThunk('booklist/getBooklist', async (URL, { rejectWithValue }) => {
  try {
    const data = await axios.get(`${URL + APP_ID}/books`);
    return data.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const addBook = createAsyncThunk('booklist/addBook', async ({ URL, newBook }, { rejectWithValue }) => {
  try {
    const data = await axios.post(`${URL + APP_ID}/books`, newBook, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const removeBook = createAsyncThunk('booklist/removeBook', async ({ URL, itemId }, { rejectWithValue }) => {
  try {
    const data = await axios.delete(`${URL + APP_ID}/books/${itemId}`);
    return data.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
