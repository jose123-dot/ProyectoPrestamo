import axios from "./axios";

export const registerRequest = async (user) => axios.post(`/signup`, user);

export const loginRequest = async (user) => axios.post(`/signin`, user);

export const verifyTokenRequest = async () => axios.get(`/verify`);
