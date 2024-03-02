import { z } from "zod";

//validacion para registrase
export const registerSchema = z.object({
  username: z.string({
    required_error: "Usuario Incorrecto",
  }),
  email: z.string({
    required_error: "Email Incorrecto",
  }),
  password: z
    .string({
      required_error: "Contraseña Incorrecta",
    })
    .min(6, { message: "deben ser minimo 8 caracteres" }),
});

//para iniciar sesion

export const signinSchema = z.object({
  email: z.string({
    required_error: "Email Incorrecto",
  }),
  password: z
    .string({
      required_error: "Contraseña Incorrecta",
    })
    .min(6, { message: "deben ser minimo 8 caracteres" }),
});
