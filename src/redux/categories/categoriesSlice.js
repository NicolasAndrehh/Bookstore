/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
  isLoading: false,
};

export const checkStatus = createAsyncThunk('categories/checkStatus', async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return 'Under construction';
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkStatus.pending, (state) => {
      state.isLoading = true;
      state.value = '';
    });
    builder.addCase(checkStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    });
  },
});

// export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
