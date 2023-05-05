import { configureStore } from '@reduxjs/toolkit';
import showReducer from './showSlice';

const store = configureStore({
  reducer: {
    show: showReducer,
  },
});

export default store;
