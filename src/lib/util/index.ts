import * as z from "zod";
// import { ZodSchema } from "zod";

export const parseAsPositiveInt = (q: string | string[] | undefined) => {
  const effect = z.number().positive().int();
  const val = Number(q);
  try {
    effect.parse(val);
    return val;
  } catch {
    return undefined;
  }
};

export const parseAsNonEmptyString = (q: string | string[] | undefined) => {
  if (typeof q === "string" && q.length > 0) return q;
};
