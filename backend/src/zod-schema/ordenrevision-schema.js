import { z } from "zod";

export const OrdenRevisionSchema = z.object({
  estatus: z.string({
    required_error: "Ingrese el estatus",
  }),
});