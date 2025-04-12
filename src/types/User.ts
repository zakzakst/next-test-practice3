import * as z from "zod";

export const UserSchema = z.object({
  id: z.number().min(1),
  name: z.string().min(1),
  email: z.string().email().min(1),
  imageUrl: z.string().optional(),
});

export type User = z.infer<typeof UserSchema>;
