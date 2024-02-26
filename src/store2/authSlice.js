// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadUserFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  return null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: Boolean(loadUserFromLocalStorage()),
    user: loadUserFromLocalStorage(),
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(action.payload));
        localStorage.setItem('isAuthenticated',true);
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
      }
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
