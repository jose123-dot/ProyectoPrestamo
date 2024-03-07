//importador libreria
import express, { Router } from "express";
import * as solicitudEmpresaCtrl from "../Controller/solicitudempresa-ctrl.js";
const SolicitudEmpresaRouter = Router();

//obtener
SolicitudEmpresaRouter.get("/", solicitudPersonaCtrl.getSolicitudEmpresa);

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

export default SolicitudEmpresaRouter;
