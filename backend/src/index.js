import "./config/db.js";
import express, { json } from "express";
import { createRol } from "./libs/InitialSeptup.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

//importar los routes
import authrouter from "./router/auth-router.js";

//middleware
app.use(cors());
app.use(json());
createRol();

app.use(morgan("dev"));

//routes
app.use("/api/", authrouter);

// toca hacer los router de los demas
app.listen(4000, () => console.log("Servidor ejecutado"));
