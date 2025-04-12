import * as z from "zod";

export const MyPostSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  body: z.string(),
  imageUrl: z.string(),
  published: z.boolean(),
  authorId: z.number(),
});

export type MyPost = z.infer<typeof MyPostSchema>;
