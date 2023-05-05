import { createSlice } from '@reduxjs/toolkit';

export const showSlice = createSlice({
  name: 'show',
  initialState: {
    data: [],
    isActive: false,
  },
  reducers: {
    fetchShowSuccess: (state, action) => {
      state.data = action.payload;
      state.isActive = true;
    },
  },
});

export const { fetchShowSuccess } = showSlice.actions;

export default showSlice.reducer;
