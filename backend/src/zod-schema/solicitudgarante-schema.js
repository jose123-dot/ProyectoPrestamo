import {z} from "zod";

export const solicitudPrestamoSchema = z.object({
    nombre: z.string({
      required_error: "Ingrese el nombre",
      min: 1,
      max: 255,
    }),
    apellido: z.string({
      required_error: "Ingrese el apellido",
      min: 1,
      max: 255,
    }),
    apodo: z.string().nullable().max(255, "El apodo no puede superar 255 caracteres"),
    nacionalidad: z.string({
      required_error: "Ingrese la nacionalidad",
      min: 1,
      max: 255,
    }),
    sexo: z.enum(["M", "F", "O"], "El sexo debe ser M, F o O"),
    tipoDocumento: z.string({
      required_error: "Ingrese el tipo de documento",
      min: 1,
      max: 255,
    }),
    ocupacion: z.string({
      required_error: "Ingrese la ocupación",
      min: 1,
      max: 255,
    }),
    telefonoresidencial: z.string({
      required_error: "Ingrese el teléfono residencial",
      min: 1,
      max: 255,
    }),
    celular: z.string({
      required_error: "Ingrese el celular",
      min: 1,
      max: 255,
    }),
    correo: z.string().email({
      required_error: "Ingrese el correo electrónico",
      max: 255,
    }),
    direccion: z.string({
      required_error: "Ingrese la dirección",
      min: 1,
      max: 255,
    }),
    noedificio: z.string().nullable().max(255, "El número de edificio no puede superar 255 caracteres"),
    nocasa: z.string().nullable().max(255, "El número de casa no puede superar 255 caracteres"),
    sector: z.string({
      required_error: "Ingrese el sector",
      min: 1,
      max: 255,
    }),
    municipio: z.string({
      required_error: "Ingrese el municipio",
      min: 1,
      max: 255,
    }),
    provincia: z.string({
      required_error: "Ingrese la provincia",
      min: 1,
      max: 255,
    }),
    direccionfamiliar: z.string({
      required_error: "Ingrese la dirección familiar",
      min: 1,
      max: 255,
    }),
    trabajaactualmente: z.boolean(),
    nombrelugartrabajo: z.string().nullable().max(255, "El nombre del lugar de trabajo no puede superar 255 caracteres"),
    cargotrabajo: z.string().nullable().max(255, "El cargo de trabajo no puede superar 255 caracteres"),
    direcciontrabajo: z.string().nullable().max(255, "La dirección de trabajo no puede superar 255 caracteres"),
    ingresoPrincipal: z.number({
      required_error: "Ingrese el ingreso principal",
      min: 0,
    }),
    poseeotrosingresos: z.boolean(),
    otrosingresos: z.number().nullable().min(0, "Los otros ingresos no pueden ser negativos"),
    poseeinmueble: z.boolean(),
    valorinmueble: z.number().nullable().min(0, "El valor del inmueble no puede ser negativo"),
    poseevehiculo: z.boolean(),
    valorvehiculo: z.number().nullable().min(0, "El valor del vehículo no puede ser negativo"),
  });