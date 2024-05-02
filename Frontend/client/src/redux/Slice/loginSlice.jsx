import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: localStorage.getItem("token"),
  },
  reducers: {
    setLoginToken: (state, action) => {
      state.token = action.payload;
    },
    updateLoginToken: (state, action) => {
      state.token = action.payload;
    },
    deleteLoginToken: (state) => {
      state.token = null;
    },
  },
});

export const { setLoginToken, updateLoginToken, deleteLoginToken } = loginSlice.actions;

export default loginSlice.reducer;
