import {Router} from "express"; 
import * as aprobaciongarantecontroller from "../Controller/aprobaciongarante-controller.js"; 
const AprobacionGaranteRouter = Router();

//Obtener las vistas

AprobacionGaranteRouter.get("/",aprobaciongarantecontroller.getaprobaciongarante);

//Agregar

AprobacionGaranteRouter.post(
    "/agregar", aprobaciongarantecontroller.saveaprobaciongarante
);

//Editar 

AprobacionGaranteRouter.put(
"/editar", aprobaciongarantecontroller.editarAprobacionGarante);

//Eliminar

AprobacionGaranteRouter.delete (
    "/eliminar", aprobaciongarantecontroller.deleteaprobaciongarante
);

export default AprobacionGaranteRouter;