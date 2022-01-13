import {
  CREATE_MOMENT,
  DELETE_MOMENT,
  GET_MOMENTS,
  UPDATE_MOMENT,
} from "../constants/momentConstants";
export default (state = [], action) => {
  switch (action.type) {
    case GET_MOMENTS:
      return action.payload;
    case CREATE_MOMENT:
      return [...state, action.payload];
    case UPDATE_MOMENT:
      return state.map((x) =>
        x._id === action.payload._id ? action.payload : x
      );
    case DELETE_MOMENT:
      return state.filter((x) => x._id !== action.payload);
    default:
      return state;
  }
};
