import axios from "./axios";

export const getSolicitudRequest = async () => axios.get("/solicitudpersona");

export const createSolicitudPersonaRequest = async (solicitudpersona) =>
  axios.post("/solicitud/agregar", task);

export const updateSolicitudPersonaRequest = async (solicitudpersona) =>
  axios.put(`/solicitudpersona/${solicitudpersona._id}`, solicitudpersona);

export const deleteSolicitudPersonaRequest = async (id) =>
  axios.delete(`/solicitudpersona/${id}`);

export const getSolicitudPersonaRequest = async (id) =>
  axios.get(`/solicitudpersona/${id}`);
