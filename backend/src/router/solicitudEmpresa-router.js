//importador libreria
import express, { Router } from "express";
import * as solicitudEmpresaCtrl from "../Controller/solicitudempresa-ctrl.js";
const SolicitudEmpresaRouter = Router();
import multer from "multer";
const upload = multer({ dest: "uploads" });
//obtener
SolicitudEmpresaRouter.get("/", solicitudEmpresaCtrl.getSolicitudEmpresa);

//agregar

SolicitudEmpresaRouter.post(
  "/agregar",
  solicitudEmpresaCtrl.upload.array("documentos"),
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
