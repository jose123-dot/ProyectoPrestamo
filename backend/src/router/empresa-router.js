import express, { Router } from "express"; 
import * as EmpresaCtrl from "../Controller/empresa-ctrl.js";

const EmpresaRouter = Router();

EmpresaRouter.get("/", EmpresaCtrl.getEmpresa);

EmpresaRouter.post("/agregar", EmpresaCtrl.saveEmpresa);

EmpresaRouter.put("/editar/:id", EmpresaCtrl.editEmpresa);

EmpresaRouter.delete("/eliminar/:id", EmpresaCtrl.deleteEmpresa);

export default EmpresaRouter;