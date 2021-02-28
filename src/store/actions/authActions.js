import instance from "./instance";
import decode from "jwt-decode";
import * as types from "../actions/types";
import swal from "sweetalert";

const setUser = (token) => {
  localStorage.setItem("token", token);
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  return {
    type: types.SET_USER,
    payload: decode(token),
  };
};

export const signup = (newUser, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.token));
      history.replace("/");
      swal(
        "Welcome Aboard, Captain!",
        "It's great to have you with us!",
        "success"
      );
    } catch (error) {
      console.error(error);
    }
  };
};

export const signin = (user, history) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", user);
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.token));
      history.replace("/");
      swal("Welcome back, Captain!", "It's great to see you again!", "success");
    } catch (error) {
      console.error(error);
    }
  };
};

export const signout = () => {
  localStorage.removeItem("token");
  delete instance.defaults.headers.common.Authorization;
  swal("Stay Safe, Captain!", "We hope to see you again!");
  return {
    type: types.SET_USER,
    payload: null,
  };
};

export const checkForToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = decode(token);
    const currentTime = Date.now();
    if (currentTime <= user.exp) {
      dispatch(setUser(token));
    } else {
      localStorage.removeItem("token");
      dispatch(signout());
    }
  }
};
