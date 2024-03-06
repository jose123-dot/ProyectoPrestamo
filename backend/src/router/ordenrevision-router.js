import express, { Router } from "express"; 
import * as ordenRevisionCtrl from "../Controller/ordenrevision-ctrl.js";

import { validateSchema } from "../middlewares/validator-mid.js";
import { OrdenRevisionSchema } from "../zod-schema/ordenrevision-schema.js";
const OrdenRevisionRouter = Router();

OrdenRevisionRouter.get("/", ordenRevisionCtrl.getOrdenRevision);

OrdenRevisionRouter.post("/agregar", validateSchema(OrdenRevisionSchema), ordenRevisionCtrl.saveOrdenRevision);

OrdenRevisionRouter.put("/editar/:id", validateSchema(OrdenRevisionSchema), ordenRevisionCtrl.editOrdenRevision);

OrdenRevisionRouter.delete("/eliminar/:id", ordenRevisionCtrl.deleteOrdenRevision);

export default OrdenRevisionRouter;