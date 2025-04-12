import * as z from "zod";

export const LoginInputSchema = z.object({
  email: z.string().email("不正なメールアドレスです"),
  password: z.string().min(8, "8文字以上で入力してください"),
});

export type LoginInput = z.infer<typeof LoginInputSchema>;
