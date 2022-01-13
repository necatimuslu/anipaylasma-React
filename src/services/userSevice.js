import axios from "axios";

import { baseUrl } from "../comment/baseUrl";

export const registerUser = async (userForm) =>
  await axios.post(`${baseUrl}/user/register`, userForm);

export const loginUser = async (userForm) =>
  await axios.post(`${baseUrl}/user/login`, userForm);

export const logOut = async (id) =>
  await axios.get(`${baseUrl}/user/logout/${id}`);

export const getNewToken = async (id) =>
  await axios.get(`${baseUrl}/user/refresh/${id}`);
