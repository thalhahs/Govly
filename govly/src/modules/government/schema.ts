import { z } from "zod";

export const GovernmentSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const GovernmentsSchema = z.array(GovernmentSchema);

export type Government = z.infer<typeof GovernmentSchema>;
export type Governments = z.infer<typeof GovernmentsSchema>;
