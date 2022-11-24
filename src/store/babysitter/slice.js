import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  babysitters: null,
  babysitterDetails: null,
};

const babysitterSlice = createSlice({
  name: "babysitter",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    babysittersFetched: (state, action) => {
      //   console.log("babysitters fetched action", action);
      state.babysitters = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, babysittersFetched } = babysitterSlice.actions;

export default babysitterSlice.reducer;
