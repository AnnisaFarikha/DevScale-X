import z from "zod";

export const createEventValidation = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  dateTime: z.string().datetime("Invalid datetime format"),
  location: z.string().min(1, "Location is required"),
  status: z.enum(["UPCOMING", "ONGOING", "COMPLETED", "CANCELLED"]).optional(),
  category: z.enum(["SEMINAR", "WORKSHOP", "CONFERENCE", "MEETUP"]),
  type: z.enum(["ONLINE", "OFFLINE", "HYBRID"]),
});

export const updateEventValidation = createEventValidation.partial();
export const eventQueryValidation = z.object({
  status: z.enum(["UPCOMING", "ONGOING", "COMPLETED", "CANCELLED"]).optional(),
  category: z.enum(["SEMINAR", "WORKSHOP", "CONFERENCE", "MEETUP"]).optional(),
  type: z.enum(["ONLINE", "OFFLINE", "HYBRID"]).optional(),
});
