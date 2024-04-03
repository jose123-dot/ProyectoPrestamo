import "./config/db.js";
import express, { json } from "express";
import { createRol } from "./libs/InitialSeptup.js";
import morgan from "morgan";
import cors from "cors";
import routerSolEmpresa from "./router/solicitudEmpresa-router.js";
import routerSolPersona from "./router/solicitudPersona-router.js";

const app = express();

//importar los routes
import authrouter from "./router/auth-router.js";

//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Permite el intercambio de cookies y otros datos de autenticación
  })
);
app.use(json());
createRol();

app.use(morgan("dev"));

//routes
app.use("/api/", authrouter);
app.use("/api/solicitudpersona/", routerSolPersona);
app.use("/api/solicitudempresa/", routerSolEmpresa);

// toca hacer los router de los demas
app.listen(4000, () => console.log("Servidor ejecutado"));
