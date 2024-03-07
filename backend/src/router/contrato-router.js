import { Router } from "express"
import * as contratocontroller from "../Controller/contrato-controller.js";
const ContratoRouter = Router();

//Obtener 

ContratoRouterRouter.get("/", contratocontroller.getcontrato);

//Agregar 

ContratoRouter.post(
    "/agregar",
    contratocontroller.saveContrato
  );

  //editar
ContratoRouter.put(
    "/editar",
    contratocontroller.editContrato
  );

  ContratoRouter.delete(
    "/eliminar",
    contratocontroller.deleteContrato
  );

  export default ContratoRouter; 