import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {

  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
