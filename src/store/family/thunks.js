import axios from "axios";
import {
  startLoading,
  familiesFetched,
  familyDetailsfetched,
} from "../family/slice";

import { apiUrl } from "../../config/constants";

// display list of families
export const fetchFamilies = () => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${apiUrl}/families`);
    // console.log("response thunk families", response.data);
    dispatch(familiesFetched(response.data));
  } catch (error) {
    console.log(error.message);
  }
};

// view family profile
export const fetchFamilyDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoading());
    const response = await axios.get(`${apiUrl}/families/${id}`);
    // console.log("response thunk family details", response.data);
    dispatch(familyDetailsfetched(response.data));
  } catch (error) {
    console.log(error.message);
  }
};
