import { configureStore } from '@reduxjs/toolkit'
import CreateAdSlice from './CreateAdSlice';

const store = configureStore({
  reducer: {
    createad: CreateAdSlice
  },
});

export default store;
