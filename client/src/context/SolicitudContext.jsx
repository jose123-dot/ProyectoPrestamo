import { createContext, useContext, useState } from "react";
import {
  createSolicitudPersonaRequest,
  deleteSolicitudPersonaRequest,
  getSolicitudPersonaRequest,
  updateSolicitudPersonaRequest,
} from "../api/socitudpersona";

const TaskContext = createContext();

export const useSolicitudPersona = () => {
  const context = useContext(TaskContext);
  if (!context)
    throw new Error("useSolicitud debe ser utilizado entro SolicitudPrivider");
  return context;
};

export function SolicitudPersonaProvider({ children }) {
  const [SolicitudPersona, setSolicitudPersona] = useState([]);

  const getSolicitudPerosna = async () => {
    const res = await getSolicitudPersonaRequest();
    setSolicitudPersona(res.data);
  };

  const deleteSolicitudPersona = async (id) => {
    try {
      const res = await deleteSolicitudPersonaRequest(id);
      if (res.status === 204)
        setSolicitudPersona(
          solicitudPersonas.filter(
            (SolicitudPersona) => SolicitudPersona._id !== id
          )
        );
    } catch (error) {
      console.log(error);
    }
  };

  const createSolictudPersona = async (solicitudpersona) => {
    try {
      const res = await createSolicitudPersonaRequest(solicitudperson);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, task) => {
    try {
      await updateTaskRequest(id, task);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
