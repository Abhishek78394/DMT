import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  profileData: null,
  registerData: null,
  loginData: null,
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setProfileData: (state, action) => {
      state.profileData = action.payload;
    },
    setRegisterData: (state, action) => {
      state.registerData = action.payload;
    },
    setLoginData: (state, action) => {
      state.loginData = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.profileData = null;
      state.loginData = null;
    },
  },
});

export const {
  setLoading,
  setProfileData,
  setRegisterData,
  setLoginData,
  setIsLogin,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
