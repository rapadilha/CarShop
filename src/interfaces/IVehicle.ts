import { z } from 'zod';

const VehicleSchema = z.object({
  model: z.string().min(3),
  year: z.number(),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

export type IVehicle = z.infer<typeof VehicleSchema>;
