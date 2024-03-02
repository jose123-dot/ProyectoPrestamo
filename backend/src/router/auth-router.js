import { Router } from "express";
import * as authcontroller from "../Controller/auth-controllers.js";
import { validateSchema } from "../middlewares/validator-mid.js";
import { registerSchema, signinSchema } from "../zod-schema/auth-schema.js";
const authRoter = Router();

authRoter.post(
  "/signup",
  validateSchema(registerSchema),
  authcontroller.signup
);
authRoter.post("/signin", validateSchema(signinSchema), authcontroller.signin);

export default authRoter;
