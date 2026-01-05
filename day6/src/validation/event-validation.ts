import z from "zod";

export const createEventValidation = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  dateTime: z.string().datetime(),
  location: z.string().min(1),
});
