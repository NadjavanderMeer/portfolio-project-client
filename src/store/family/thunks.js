import axios from "axios";
import { startLoading, familiesFetched } from "../family/slice";

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
