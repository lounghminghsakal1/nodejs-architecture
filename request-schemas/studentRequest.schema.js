import { z } from "zod";

export const createStudentSchema = z.object({
  id: z.number(),
  name: z.string().min(1).max(25),
  age: z.number().int().positive()
});

export const updateStudentSchema = createStudentSchema.partial();


