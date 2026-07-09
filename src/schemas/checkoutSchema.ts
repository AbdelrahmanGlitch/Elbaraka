import { z } from "zod";

export const checkoutSchema = z.object({

  fullName: z
    .string()
    .min(3, "Name is required"),

  phone: z
    .string()
    .min(11)
    .max(11),

  secondaryPhone: z
    .string()
    .optional(),

  area: z
    .string()
    .min(2),

  street: z
    .string()
    .min(2),

  building: z
    .string()
    .min(1),

  floor: z
    .string()
    .optional(),

  apartment: z
    .string()
    .optional(),

  landmark: z
    .string()
    .optional(),

  notes: z
    .string()
    .optional(),

  promoCode: z
    .string()
    .optional(),

});