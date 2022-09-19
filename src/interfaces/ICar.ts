import { z } from 'zod';
import { IVehicle } from './IVehicle';

const CarSchema = z.object({
  doorsQty: z.number().int(),
  seatsQty: z.number().int(),
});

export type ICar = IVehicle & z.infer<typeof CarSchema>;
