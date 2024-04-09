import { Router } from "express";
import * as authcontroller from "../Controller/auth-controllers.js";
import { upload } from "../multerconfig/folder.js";
import { validateSchema } from "../middlewares/validator-mid.js";
import { registerSchema, signinSchema } from "../zod-schema/auth-schema.js";
const authRoter = Router();

authRoter.post(
  "/signup",
  upload.array("archivos"),
  validateSchema(registerSchema),
  authcontroller.signup
);
authRoter.post("/signin", validateSchema(signinSchema), authcontroller.signin);

authRoter.get("/verify", authcontroller.verifyToken);
authRoter.post("/logout", authcontroller.verifyToken, authcontroller.logout);

export default authRoter;
