//importador libreria
import express, { Router } from "express";
import * as solicitudEmpresaCtrl from "../Controller/solicitudEmpresa-ctrl.js";
const SolicitudEmpresaRouter = Router();

//obtener
SolicitudEmpresaRouter.get("/", solicitudPersonaCtrl.getSolicitudPersona);

//agregar

SolicitudEmpresaRouter.post(
  "/agregar",
  solicitudEmpresaCtrl.saveSolicitudPersona
);

//editar
SolicitudEmpresaRouter.put(
  "/editar",
  solicitudEmpresaCtrl.editSolicitudPersona
);

//eliminar
SolicitudEmpresaRouter.delete(
  "/eliminar",
  solicitudEmpresaCtrl.deleteSolicitudPersona
);

export default SolicitudPersonaRouter;
