import {
  LOGIN,
  REGISTER,
  ERROR,
  LOGOUT,
  LOGOUT_FAIL,
  USER_NEW_TOKEN,
  TOKEN_ERROR,
} from "../constants/userConstants";
import * as api from "../services/userSevice";

export const userRegister = (userForm, history, toast) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(userForm);

    dispatch({ type: REGISTER, payload: data });
    toast.success("Kayıt işlemi başarıyla gerçekleşti");
    history.push("/");
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const loginUser = (userForm, history, toast) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(userForm);

    dispatch({ type: LOGIN, payload: data });
    toast.success("Giriş işlemi başarılı");
    history.push("/");
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = (id) => async (dispatch) => {
  try {
    const { message } = await api.logOut(id);

    dispatch({
      type: LOGOUT,
      payload: message,
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAccessToken = (id) => async (dispatch) => {
  try {
    const { data } = await api.getNewToken(id);

    dispatch({
      type: USER_NEW_TOKEN,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TOKEN_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
