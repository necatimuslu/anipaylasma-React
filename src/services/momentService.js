import axios from "axios";

import { baseUrl } from "../comment/baseUrl";

export const getMoments = async () => axios.get(`${baseUrl}/moment`);

export const getMomentById = async (id) => axios.get(`${baseUrl}/moment/${id}`);

export const createMoment = async (momentForm) =>
  await axios.post(`${baseUrl}/moment`, momentForm);

export const updateMoment = async (id, momentForm) =>
  await axios.put(`${baseUrl}/moment/${id}`, momentForm);

export const deleteMoment = async (id) =>
  await axios.delete(`${baseUrl}/moment/${id}`);
