import express, { Router } from "express"; 
import * as solicitudGarantCtrl from "../Controller/solicitudgarante-ctrl.js";

const SolicitudGaranteRouter = Router();

SolicitudGaranteRouter.get("/", solicitudGarantCtrl.getSolicitudGarante);

SolicitudGaranteRouter.post("/agregar", solicitudGarantCtrl.saveSolicitudGarante);

SolicitudGaranteRouter.put("/editar/:id", solicitudGarantCtrl.editSolicitudGarante);

SolicitudGaranteRouter.delete("/eliminar/:id", solicitudGarantCtrl.deleteSolicitudGarante);

export default SolicitudGaranteRouter;