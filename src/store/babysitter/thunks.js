import axios from "axios";
import {
  startLoading,
  babysittersFetched,
  babysitterDetailsFetched,
} from "./slice";

import { apiUrl } from "../../config/constants";

// display list of babysitters
export const fetchBabysitters = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${apiUrl}/babysitters`);
    // console.log("response thunk babysitters", response.data);
    dispatch(babysittersFetched(response.data));
  } catch (error) {
    console.log(error.message);
  }
};

// view babysitter profile
export const fetchBabysitterDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${apiUrl}/babysitters/${id}`);
    // console.log("response thunk babysitter details", response.data);
    dispatch(babysitterDetailsFetched(response.data));
  } catch (error) {
    console.log(error.message);
  }
};
