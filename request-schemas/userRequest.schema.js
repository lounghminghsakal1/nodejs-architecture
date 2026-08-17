import {z} from "zod";

export const createUserRequestSchema = z.object({
  name: z.string().min(3).max(25),
  email: z.email()
});

export const updateUserRequestSchema = createUserRequestSchema.partial();
