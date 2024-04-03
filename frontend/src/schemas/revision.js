import { z } from 'zod';

// Esquema de validación para el objeto de estatus de aprobación
export const RevisionObjectSchema = z.object({
  estatusaprobacion: z.string().max(20).required('Estatus de aprobación es requerido'),
  usuario: z.string().nullable().optional(),
});
