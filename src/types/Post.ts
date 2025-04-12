import * as z from "zod";

export const PostSchema = z.object({
  id: z.number(),
  imageUrl: z.string(),
  title: z.string(),
  authorName: z.string(),
  likeCount: z.number(),
});

export type Post = z.infer<typeof PostSchema>;

export const PostDetailSchema = z.object({
  title: z.string(),
  description: z.string(),
  imageUrl: z.string(),
  body: z.string(),
  authorId: z.number(),
  likeCount: z.number(),
  liked: z.boolean(),
});

export type PostDetail = z.infer<typeof PostDetailSchema>;
