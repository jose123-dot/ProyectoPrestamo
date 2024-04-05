import {z} from "zod";

export const pagoPrestamoSchema = z.object({
    idpagoprestamo: z.number({
      required_error: "Falta el ID del pago del préstamo",
    }),
    idprestamo: z.number({
      required_error: "Falta el ID del préstamo",
    }),
    idcliente: z.number({
      required_error: "Falta el ID del cliente",
    }),
    idusuario: z.number({
      required_error: "Falta el ID del usuario que realizó el pago",
    }),
    idmetodoPago: z.number({
      required_error: "Falta el ID del método de pago utilizado",
    }),
    montopagado: z.number({
      required_error: "Ingrese el monto pagado",
      min: 0,
    }),
    fechapago: z.date({
      required_error: "Ingrese la fecha del pago",
    }),
  });