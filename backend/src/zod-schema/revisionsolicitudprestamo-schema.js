import {z} from "zod"; 

export const solicitudPrestamoSchema = z.object({
    idrevisionSolicitudprestamo: z.number({
      required_error: "Falta el ID de revisión de la solicitud de préstamo",
    }),
    idprestamo: z.number({
      required_error: "Falta el ID del préstamo",
    }),
    estatusaprobacion: z.enum(["Pendiente", "Aprobado", "Rechazado"], "El estado de aprobación debe ser Pendiente, Aprobado o Rechazado"),
    fecha: z.date({
      required_error: "Ingrese la fecha",
    }),
  });