import * as z from "zod";

export const ProfileSchema = z.object({
  id: z.number(),
  name: z.string(),
  bio: z.string(),
  twitterAccount: z.string(),
  githubAccount: z.string(),
  imageUrl: z.string(),
  email: z.string(),
  likeCount: z.number(),
});

export type Profile = z.infer<typeof ProfileSchema>;
