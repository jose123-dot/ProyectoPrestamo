//importador libreria
import { Router } from "express";
import * as solicitudEmpresaCtrl from "../Controller/solicitudempresa-ctrl.js";
const SolicitudEmpresaRouter = Router();
import { validateSchema } from "../middlewares/validator-mid.js";
import { SolicitudEmpresaSchema } from "../zod-schema/solicitudempresa-schema.js";

//obtener
SolicitudEmpresaRouter.get("/", solicitudEmpresaCtrl.getSolicitudEmpresa);

//agregar

SolicitudEmpresaRouter.post(
  "/agregar",
  validateSchema(SolicitudEmpresaSchema),
  solicitudEmpresaCtrl.saveSolicitudEmpreesa
);

//editar
SolicitudEmpresaRouter.put(
  "/editar/:id",
  validateSchema(SolicitudEmpresaSchema),
  solicitudEmpresaCtrl.editSolicitudEmpresa
);

//eliminar
SolicitudEmpresaRouter.delete(
  "/eliminar",
  validateSchema(SolicitudEmpresaSchema),
  solicitudEmpresaCtrl.deleteSolicitudEmpresa
);

export default SolicitudEmpresaRouter;
