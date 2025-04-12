import * as z from "zod";

export const ProfileSchema = z.object({
  imageUrl: z.string(),
});

export type Profile = z.infer<typeof ProfileSchema>;
