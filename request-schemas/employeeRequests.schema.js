import {z} from "zod";

export const createEmployeeRequestSchema = z.object({
  name: z.string(),
  email: z.email(),
  phone: z.string(),
  departmentId: z.number().int().positive()
});

export const updateEmployeeRequestSchema = createEmployeeRequestSchema.partial();
