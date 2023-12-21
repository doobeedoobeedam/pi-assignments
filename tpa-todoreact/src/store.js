import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './redux/reducers'

const store = configureStore({
    reducer: todoReducer,
  });

export default store;