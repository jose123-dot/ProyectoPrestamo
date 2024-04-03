import { z } from 'zod';

// Esquema de validación para la entidad de usuario
const EmpresaSchema = z.object({
  usuario: z.string().nullable().optional(),
  nombre: z.string().max(50).required('Nombre es requerido'),
  ubicacion: z.string().max(50).required('Ubicación es requerida'),
  direccion: z.string().max(50).required('Dirección es requerida'),
  rnc: z.string().max(15).required('RNC es requerido'),
  telefono: z.string().max(15).required('Teléfono es requerido'),
  correo: z.string().max(50).required('Correo es requerido'),
  fax: z.string().max(25).required('Fax es requerido').unique('El fax debe ser único'),
  actividad: z.string().max(40).required('Actividad es requerida'),
  sitioweb: z.string().max(40).optional(),
  fechafundacion: z.date().required('Fecha de fundación es requerida'),
  paisfundacion: z.string().max(20).required('País de fundación es requerido'),
  ingresosanuales: z.string().required('Ingresos anuales es requerido'),
  totalactivos: z.string().required('Total de activos es requerido'),
});
