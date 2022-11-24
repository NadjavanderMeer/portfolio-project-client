import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  families: null,
  familyDetails: null,
};

const familySlice = createSlice({
  name: "family",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    familiesFetched: (state, action) => {
      state.families = action.payload;
      state.loading = false;
    },
    familyDetailsfetched: (state, action) => {
      state.familyDetails = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, familiesFetched, familyDetailsfetched } =
  familySlice.actions;

export default familySlice.reducer;
