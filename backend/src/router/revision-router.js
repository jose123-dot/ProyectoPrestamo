import express, { Router } from "express";
import * as revisionCtrl from "../Controller/revision-ctrl.js";

import { validateSchema } from "../middlewares/validator-mid.js";
import { RevisionSchema } from "../zod-schema/revision-schema.js";
const RevisionRouter = Router();

RevisionRouter.get("/", revisionCtrl.getRevision);

RevisionRouter.post("/agregar", validateSchema(RevisionSchema), revisionCtrl.saveRevision);

RevisionRouter.put("/editar/:id", validateSchema(RevisionSchema), revisionCtrl.editRevision);

RevisionRouter.delete("/eliminar/:id", revisionCtrl.deleteRevision);

export default RevisionRouter;