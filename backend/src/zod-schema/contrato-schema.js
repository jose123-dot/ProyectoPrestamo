import {z} from "zod";

export const contratoSchema = z.object({
  idcontrato: z.number({
    required_error: "Falta el ID del contrato",
  }),
  idusuario: z.number({
    required_error: "Falta el ID del usuario",
  }),
  idrevisionsolicitud: z.number({
    required_error: "Falta el ID de la revisión de la solicitud",
  }),
  idmetodopago: z.number({
    required_error: "Falta el ID del método de pago",
  }),
  monto: z.number({
    required_error: "Ingrese el monto del préstamo",
    min: 0,
  }),
  tasainteres: z.number({
    required_error: "Ingrese la tasa de interés",
    min: 0,
  }),
  fechainicio: z.date({
    required_error: "Ingrese la fecha de inicio del préstamo",
  }),
  duracionmeses: z.number({
    required_error: "Ingrese la duración del préstamo en meses",
    min: 1,
  }),
  diapago: z.number({
    required_error: "Ingrese el día de pago del préstamo",
    min: 1,
    max: 31,
  }),
});