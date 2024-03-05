import { z } from "zod";

//validacion para registrase
export const SolicitudPersonaSchema = z.object({
  nombre: z.string({
    required_error: "Nombre  Incorrecto",
  }),
  apellido: z.string({
    required_error: "Apellido Incorrecto",
  }),
  documento: z.string({
    required_error: "Documento Incorrecto",
  }),
  nacionalidad: z.string({
    required_error: "Nacionalidad Incorrecta",
  }),
  sexo: z.string({
    required_error: "Ingreso el Genero Correcto",
  }),
  apodo: z.string({
    required_error: "Ingreso un Apodo",
  }),
  ocupacion: z.string({
    required_error: "Ingrese una ocupacion Valida",
  }),

  lugartrabajo: z.string({
    required_error: "Ingrese un lugar de trabajo Valido",
  }),
  telefonoResidencial: z.string({
    required_error: "Ingrese un telefono Valido",
  }),

  celular: z.string({
    required_error: "Ingrese un celular Valido",
  }),
  email: z.string({
    required_error: "Ingrese un Correo Valido",
  }),
  direccionpersonal: z.string({
    required_error: "Ingrese una Direccion Valida",
  }),
  direccionfamiliar: z.string({
    required_error: "Ingrese una Direccion Valida",
  }),
  direcciontrabajo: z.string({
    required_error: "Ingrese una Direccion Valida",
  }),

  direccionfamiliar: z.string({
    required_error: "Ingrese el estatus",
  }),
});
