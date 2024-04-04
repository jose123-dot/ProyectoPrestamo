import { z } from "zod";

//validacion para registrase
export const registerSchema = z.object({
  username: z.string({
    required_error: "Usuario Incorrecto",
  }),
  email: z.string({
    required_error: "Email Incorrecto",
  }),
  password: z
    .string({
      required_error: "Contraseña Incorrecta",
    })
    .min(6, { message: "deben ser minimo 8 caracteres" }),
});

//para iniciar sesion

export const signinSchema = z.object({
  email: z.string({
    required_error: "Email Incorrecto",
  }),
  password: z
    .string({
      required_error: "Contraseña Incorrecta",
    })
    .min(6, { message: "deben ser minimo 8 caracteres" }),
});

// validacion de solicitudprestamopersona 

export const solicitudprestamopersonaSchema = z.object({
  nombre: z.string({
    required_error: "Coloque el nombre",
  }),
  apellido: z.string({
    required_error: "Coloque el apellido",
  }),
  tipoDocumento: z.string({
    required_error : "Seleccione el tipo de documento",
  }),
  documento: z.string({
    required_error : "Ingrese documento",
  }),
  nacionalidad: z.string({
    required_error : "Ingrese su nacionalidad",
  }),
  sexo: z.string({
    required_error : "Ingrese su sexo",
  }),
  apodo: z.string({
    required_error : "Ingrese apodo o alias",
  }),
  ocupacion: z.string({
    required_error : "Ingrese su ocupacion",
  }),
  lugarDeTrabajo: z.string({
    required_error : "Ingrese lugar de trabajo",
  }),
  celular: z.string({
    required_error : "Ingrese su numero telefononico",
  }),
  email: z.string().email({
    required_error : "Ingrese su email",
  }),
  direccionPersonal: z.string({
    required_error : "Ingrese su direccion personal",
  }),
  direccionFamiliar: z.string({
    required_error : "Ingrese la direccion familiar",
  }),
  direccionTrabajo: z.string({
    required_error : "Ingrese direccion de donde labora",
  }),
  estatus: z.string({
    required_error : "Ingrese su estado laboral",
  }),

});

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
