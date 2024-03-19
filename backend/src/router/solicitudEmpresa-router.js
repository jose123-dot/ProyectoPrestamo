//importador libreria
import express, { Router } from "express";
import * as solicitudEmpresaCtrl from "../Controller/solicitudempresa-ctrl.js";
const SolicitudEmpresaRouter = Router();

//obtener
SolicitudEmpresaRouter.get("/", solicitudEmpresaCtrl.getSolicitudEmpresa);

//agregar

SolicitudEmpresaRouter.post(
  "/agregar",
  solicitudEmpresaCtrl.saveSolicitudEmpresa
);

//editar
SolicitudEmpresaRouter.put(
  "/editar/:id",
  solicitudEmpresaCtrl.editSolicitudEmpresa
);

//eliminar
SolicitudEmpresaRouter.delete(
  "/eliminar",
  solicitudEmpresaCtrl.deleteSolicitudEmpresa
);

export default SolicitudEmpresaRouter;
