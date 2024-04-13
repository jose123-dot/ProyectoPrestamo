import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Por Favor un Correo Valido",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const registerSchema = z.object({
  email: z.string().email({
    message: "Por favor, introduce una dirección de correo electrónico válida",
  }),

  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres",
  }),

  confirmPassword: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres",
  }),

  nombre: z.string().max(40).nonempty({
    message: "El nombre es requerido y no puede estar vacío",
  }),

  apellido: z.string().max(40).nonempty({
    message: "El apellido es requerido y no puede estar vacío",
  }),

  apodo: z.string().max(30).optional(),

  nacionalidad: z.string().max(30).nonempty({
    message: "La nacionalidad es requerida y no puede estar vacía",
  }),

  sexo: z.string().max(20).nonempty({
    message: "El sexo es requerido y no puede estar vacío",
  }),

  tipodocumento: z.string().max(20).nonempty({
    message: "El tipo de documento es requerido y no puede estar vacío",
  }),

  documento: z.string().max(30).nonempty({
    message: "El documento es requerido y no puede estar vacío",
  }),

  ocupacion: z.string().max(40).nonempty({
    message: "La ocupación es requerida y no puede estar vacía",
  }),

  telefonoresidencial: z.string().max(20).optional(),

  celular: z.string().max(20).nonempty({
    message: "El número de celular es requerido y no puede estar vacío",
  }),

  direccion: z.string().max(30).nonempty({
    message: "La dirección es requerida y no puede estar vacía",
  }),

  noresidencia: z.string().max(8).optional(),

  sector: z.string().max(30).optional(),

  municipio: z.string().max(30).nonempty({
    message: "El municipio es requerido y no puede estar vacío",
  }),

  provincia: z.string().max(30).nonempty({
    message: "La provincia es requerida y no puede estar vacía",
  }),

  direccionfamiliar: z.string().max(70).optional(),

  cargotrabajo: z.string().max(40).optional(),

  direcciontrabajo: z.string().max(70).optional(),

  ingreso: z.number().min(0).nonnegative({
    message: "El ingreso debe ser un número no negativo",
  }),

  otrosingresos: z.boolean().optional(),

  poseeinmueble: z.string().optional(),

  valorinmueble: z.number().min(0).optional(),

  poseevehiculo: z.boolean().optional(),

  valorvehiculo: z.number().min(0).optional(),

  nombreEmpresa: z.string().max(50).optional(),

  direccionEmpresa: z.string().max(50).optional(),

  RNC: z.string().max(15).optional(),

  telefonoEmpresa: z.string().max(15).optional(),

  correoEmpresa: z.string().max(50).optional(),

  fax: z.string().max(25).optional(),

  actividad: z.string().max(40).optional(),

  sitioweb: z.string().max(40).optional(),

  fechafundacion: z.string().optional(),

  paisfundacion: z.string().max(20).optional(),

  ingresosanuales: z.number().optional(),

  totalactivos: z.number().optional(),
});
