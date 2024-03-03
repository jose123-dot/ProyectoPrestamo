//importador libreria
import express, { Router } from "express";
import * as solicitudPersonaCtrl from "../Controller/solicitudpersona-ctrl.js";
const SolicitudPersonaRouter = Router();

//obtener
SolicitudPersonaRouter.get("/", solicitudPersonaCtrl.getSolicitudPersona);

//agregar

SolicitudPersonaRouter.post(
  "/agregar",
  solicitudPersonaCtrl.saveSolicitudPersona
);

//editar
SolicitudPersonaRouter.put(
  "/editar",
  solicitudPersonaCtrl.editSolicitudPersona
);

//eliminar
SolicitudPersonaRouter.delete(
  "/eliminar",
  solicitudPersonaCtrl.deleteSolicitudPersona
);

export default SolicitudPersonaRouter;
