import { z } from "zod";

//validacion para registrase

export const SolicitudPersonaSchema = z.object({
  usuario: z.string(), // Aquí deberías utilizar el tipo de dato adecuado para representar un ObjectId
  monto: z.number().refine((val) => typeof val === "number", {
    message: "El campo 'monto' debe ser un número.",
  }),
  tasainteres: z.number().refine((val) => typeof val === "number", {
    message: "El campo 'tasainteres' debe ser un número.",
  }), // Puedes utilizar el tipo de dato adecuado para Decimal128 si Zod lo soporta
  duracionMeses: z.number().refine((val) => typeof val === "number", {
    message: "El campo 'duracionMeses' debe ser un número.",
  }),
  estatus: z.string().default("pendiente"),
});
