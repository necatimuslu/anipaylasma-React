import {
  REGISTER,
  LOGIN,
  ERROR,
  LOGOUT,
  LOGOUT_FAIL,
  USER_NEW_TOKEN,
  TOKEN_ERROR,
} from "../constants/userConstants";

export default (state = { user: null }, action) => {
  switch (action.type) {
    case REGISTER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case LOGIN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case LOGOUT:
      localStorage.removeItem("user");
      return { ...state, user: null };
    case USER_NEW_TOKEN:
      const userData = { user: state.user.user, token: action.payload };
      localStorage.setItem("user", JSON.stringify(userData));
      return { ...state, user: userData };
    case TOKEN_ERROR:
      return { error: action.payload };
    case LOGOUT_FAIL:
      return { error: action.payload };
    case ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
