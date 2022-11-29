import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  myProfile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      console.log("action", action);
      state.token = action.payload.token;
      state.profile = action.payload.user;
      state.myProfile = action.payload.profile;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
      state.myProfile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.myProfile = action.payload.profile;
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid } = userSlice.actions;

export default userSlice.reducer;
