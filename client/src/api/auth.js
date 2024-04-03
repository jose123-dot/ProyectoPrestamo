import axios from "./axios";

export const registerRequest = async (user) =>
  axios.post(`http://localhost:4000/api/signup`, user);

export const loginRequest = async (user) =>
  axios.post(`http://localhost:4000/api/signin`, user);

export const verifyTokenRequest = async () => axios.get(`/auth/verify`);
