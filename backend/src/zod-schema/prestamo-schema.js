import {z} from "zod";

export const prestamoSchema = z.object({
    MontoPrestamo: z.number({
      required_error: "Ingrese el monto del prestamo deseado",
    }),
    MontoPagado: z.number({
      required_error : "Ingrese el monto pagado",
    }),
    MesNoPagado: z.number({
      required_error : "Ingrese el numero de mes pagado", 
    }),
    Fecha: z.string({
      required_error : "Ingrese la fecha",
    }),
  });