import axios from "axios";

import { apiUrl } from "../../config/constants";
import { selectToken } from "./selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/thunks";
import { loginSuccess, logOut, tokenStillValid } from "./slice";

export const signUp = (name, email, password, isBabysitter) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
        isBabysitter,
      });

      dispatch(
        loginSuccess({
          token: response.data.token,
          user: response.data.user,
          profile: response.data.profile,
        })
      );
      dispatch(showMessageWithTimeout("succes", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      dispatch(
        loginSuccess({
          token: response.data.token,
          user: response.data.user,
          profile: response.data.profile,
        })
      );
      dispatch(showMessageWithTimeout("succes", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check whether it is still valid or if it's expired
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log("response me", response);
      // token is still valid
      dispatch(
        tokenStillValid({
          user: response.data.user,
          profile: response.data.profile,
        })
        // loginSuccess({
        //   token: token,
        //   user: response.data.user,
        //   profile: response.data.profile,
        // })
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const editProfile =
  ({
    name,
    imageUrl,
    description,
    hourlyRate,
    ageOfChildren,
    numberOfChildren,
    location,
  }) =>
  async (dispatch, getState) => {
    const { profile } = getState().user;
    // console.log(getState().user);
    const responseEditProfile = await axios.patch(
      `${apiUrl}/auth/profiles/${profile.id}`,
      {
        name: name,
        imageUrl: imageUrl,
        description: description,
        hourlyRate: hourlyRate,
        ageOfChildren: ageOfChildren,
        numberOfChildren: numberOfChildren,
        locationLatitude: location.lat,
        locationLongitude: location.lng,
      },
      {
        headers: {
          Authorization: `Bearer ${getState().user.token}`,
        },
      }
    );
    console.log(responseEditProfile, "response edit profile");
    dispatch(getUserWithStoredToken());
  };
