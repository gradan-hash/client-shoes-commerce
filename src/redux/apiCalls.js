import { loginStart, loginSuccess, loginFailure } from "./userSlicer";
import axios from "axios";
import { LoginRoute } from "../api/api";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(LoginRoute, user);

    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
