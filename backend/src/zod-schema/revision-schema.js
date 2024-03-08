import { z } from "zod";

export const RevisionSchema = z.object({
  estatusaprobacion: z.string({
    required_error: "Ingrese el estatus de aprobación",
  }),
});