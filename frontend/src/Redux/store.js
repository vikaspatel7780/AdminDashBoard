// store.js
import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './fileSlice';
import taskReducer from './TaskSlice'

const store = configureStore({
  reducer: {
    files: fileReducer,
    Tasks: taskReducer
  },
});

export default store;
