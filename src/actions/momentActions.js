import {
  CREATE_MOMENT,
  DELETE_MOMENT,
  GET_MOMENTS,
  GET_MOMENT_BY_ID,
  UPDATE_MOMENT,
} from "../constants/momentConstants";
import * as api from "../services/momentService";

export const fetchMoments = () => async (dispatch) => {
  const { data } = await api.getMoments();

  dispatch({ type: GET_MOMENTS, payload: data });
};

export const fetcMoment = (id) => async (dispatch) => {
  const { data } = await api.getMomentById(id);

  dispatch({
    type: GET_MOMENT_BY_ID,
    payload: data,
  });
};

export const createMoment = (momentForm) => async (dispatch) => {
  const { data } = await api.createMoment(momentForm);

  dispatch({ type: CREATE_MOMENT, payload: data });
};

export const updateMoment = (id, momentForm) => async (dispatch) => {
  const { data } = await api.updateMoment(id, momentForm);

  dispatch({ type: UPDATE_MOMENT, payload: data });
};

export const deleteMoment = (id) => async (dispatch) => {
  const { data } = await api.deleteMoment(id);

  dispatch({ type: DELETE_MOMENT, payload: id });
};
