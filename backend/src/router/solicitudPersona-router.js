//importador libreria
import express, { Router } from "express";
import * as solicitudPersonaCtrl from "../Controller/solicitudpersona-ctrl.js";
import multer from "multer";
const upload = multer({ dest: "uploads" });
//
import { validateSchema } from "../middlewares/validator-mid.js";
import { SolicitudPersonaSchema } from "../zod-schema/solicitudPersona-schema.js";
const SolicitudPersonaRouter = Router();

//obtener
SolicitudPersonaRouter.get("/", solicitudPersonaCtrl.getSolicitudPersona);

//agregar

SolicitudPersonaRouter.post(
  "/agregar",
  solicitudPersonaCtrl.saveSolicitudPersona
);

SolicitudPersonaRouter.post(
  "/profile",
  upload.array("documentos"),
  function (req, res, next) {
    req.files;
  }
);

//editar
SolicitudPersonaRouter.put(
  "/editar/:id",
  validateSchema(SolicitudPersonaSchema),
  solicitudPersonaCtrl.editSolicitudPersona
);

//eliminar
SolicitudPersonaRouter.delete(
  "/eliminar/:id",
  solicitudPersonaCtrl.deleteSolicitudPersona
);

export default SolicitudPersonaRouter;
