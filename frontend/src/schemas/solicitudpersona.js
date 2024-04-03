import { z } from "zod";
export const SolicitudPersonaSchema = z.object({
  usuario: z.string().min(3).required("Usuario es requerido"),
  fecha: z.string().required("Fecha es requerida"),
  monto: z.number().max(30),
});
