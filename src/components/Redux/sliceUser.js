import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  email: "",
  name: "",
};
export const userHandler = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      (state.email = ""),
        (state.name = ""),
        (state.lastname = ""),
        (state.location = null);
    },
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
    setMail: (state, action) => {
      state.email = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const isLogged = (state) => state.user.isLoggedIn;
export const getToken = (state) => state?.user?.token;
export const getMail = (state) => state?.user?.email;
export const getName = (state) => state?.user?.name;

export const { login, logout, setAuthToken, setAuthId, setMail, setName } =
  userHandler.actions;

export default userHandler.reducer;
