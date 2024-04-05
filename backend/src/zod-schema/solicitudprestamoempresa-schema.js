import {z} from "zod"; 

export const solicitudprestamoempresaSchema = z.object({
    nombreempresa: z.string({
      required_error : "Ingrese el nombre de la empresa",
    }),
    rnc: z.string({
      required_error : "Ingrese el RNC de la empresa",
    }),
    actividad: z.string({
      required_error : "Ingrese la actividad que realiza la empresa",
    }),
    teléfono: z.string({
      required_error : "Ingrese el numero telefonico de la empresa",
    }),
    email: z.string().email({
      required_error : "Ingrese el email de la empresa",
    }),
    ingresosAnuales: z.number({
      required_error : "Ingrese estimado de ingresos anuales",
    }),
    paisfundacion: z.string({
      required_error : "Ingrese pais de fundacion de la empresa",
    }),
    fechafundacion: z.string({
      required_error : "Ingrese fecha de fundacion",
    }),
    totalactivos: z.number({
      required_error : "Ingrese total activos de la empresa",
    }),
    direccion: z.string({
      required_error : "Ingrese direccion de la empresa"
    }),
  });