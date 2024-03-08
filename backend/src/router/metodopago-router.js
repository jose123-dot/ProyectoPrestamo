import { Router } from "express";
import * as metodopagocontroller from "../Controller/metodopago-controller.js"
const MetodoPagoRouter = Router();

//obter vistas

MetodoPagoRouter.get("/", metodopagocontroller.getmetodopago);

//Agregar

MetodoPagoRouter.post(
    "/agregar", metodopagocontroller.saveMetodoPago
);

//Editar 

MetodoPagoRouter.put(
    "/editar",
    metodopagocontroller.editMetodoPago
  );

  MetodoPagoRouter.delete(
    "/eliminar",
    metodopagocontroller.deleteMetodoPago
  );

  export default MetodoPagoRouter;