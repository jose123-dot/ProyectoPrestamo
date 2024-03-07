import "./config/db.js";
import express, { json } from "express";
import { createRol } from "./libs/InitialSeptup.js";
import morgan from "morgan";
import cors from "cors";
import routerSolPersona from "./router/solicitudPersona-router.js";
import routerContrato from "./router/contrato-router.js";
import routermetodopago from "./router/metodopago-router.js";

const app = express();

//importar los routes
import authrouter from "./router/auth-router.js";

//middleware
app.use(cors());
app.use(json());
createRol();

app.use(morgan("dev"));

//routes
//app.use("/api/", authrouter);
app.use("/api/solicitudpersona/", routerSolPersona);
app.use("/api/contrato/", routerContrato);
app.use("/api/metodopago/", routermetodopago);

// toca hacer los router de los demas
app.listen(4000, () => console.log("Servidor ejecutado"));
