import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Slice/loginSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export default store;
