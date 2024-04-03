import { z } from "zod";

// Esquema de validación para el objeto de estatus
export const OrdenRevisionSchema = z.object({
  estatus: z.string().max(20).required("Estatus es requerido"),
  solicitudpersona: z.string().nullable().optional(),
  solicitudempresa: z.string().nullable().optional(),
  usuario: z.string().nullable().optional(),
});
