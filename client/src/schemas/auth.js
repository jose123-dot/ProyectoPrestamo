import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Por Favor un Correo Valido",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const registerSchema = z
  .object({
    username: z
      .string({
        required_error: "El Nombre de Usuario es Requerido",
      })
      .min(3, {
        message: "Username must be at least 3 characters",
      }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    nombre: z.string().max(40).min(1),
    apellido: z.string().max(40).min(1),
    apodo: z.string().max(30).optional(),
    nacionalidad: z.string().max(30).min(1),
    sexo: z.string().max(20).min(1),
    tipodocumento: z.string().max(20).min(1),
    documento: z.string().max(30).min(1),
    ocupacion: z.string().max(40).min(1),
    telefonoresidencial: z.string().max(20).optional(),
    celular: z.string().max(20).min(1),
    correo: z.string().max(50).optional(),
    direccion: z.string().max(30).min(1),
    noresidencia: z.string().max(8).optional(),
    sector: z.string().max(30).optional(),
    municipio: z.string().max(30).min(1),
    provincia: z.string().max(30).min(1),
    direccionfamiliar: z.string().max(70).optional(),
    cargotrabajo: z.string().max(40).optional(),
    direcciontrabajo: z.string().max(70).optional(),
    ingreso: z
      .number()
      .min(0, {
        message: "Por ingrese el valor del vehiculo",
      })
      .optional(),
    otrosingresos: z.boolean().optional(),
    poseeinmueble: z.boolean().optional(),
    valorinmueble: z.number().min(0).optional(),
    poseevehiculo: z.boolean().optional(),
    valorvehiculo: z
      .number()
      .min(0, {
        message: "Por ingrese el valor del vehiculo",
      })
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
