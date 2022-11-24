import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import babysitterReducer from "./babysitter/slice";

const store = configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    babysitter: babysitterReducer,
  },
});

export default store;
