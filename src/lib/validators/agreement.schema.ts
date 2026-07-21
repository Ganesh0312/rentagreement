import { z } from "zod";

export const addressSchema = z.object({
  line1: z.string().min(3),
  line2: z.string().optional(),
  city: z.string().min(2),
  state: z.string().min(2),
  pincode: z.string().regex(/^\d{6}$/, "Enter a valid 6-digit pincode"),
});

export const partySchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email().optional(),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  aadhaar: z.string().regex(/^\d{12}$/).optional(),
  pan: z
    .string()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/)
    .optional(),
  address: addressSchema,
});

export const propertySchema = z.object({
  type: z.enum(["residential", "commercial"]),
  address: addressSchema,
  areaSqFt: z.number().positive().optional(),
  furnishing: z
    .enum(["unfurnished", "semi_furnished", "fully_furnished"])
    .optional(),
});

export const termsSchema = z.object({
  monthlyRent: z.number().positive(),
  securityDeposit: z.number().min(0),
  startDate: z.string().datetime({ offset: true }).or(z.string().date()),
  endDate: z.string().datetime({ offset: true }).or(z.string().date()),
  noticePeriodDays: z.number().int().min(0).max(180),
  maintenanceIncluded: z.boolean(),
});

export const createAgreementSchema = z.object({
  stateCode: z.string().length(2),
});

export type CreateAgreementInput = z.infer<typeof createAgreementSchema>;
export type PropertyInput = z.infer<typeof propertySchema>;
export type PartyInput = z.infer<typeof partySchema>;
export type TermsInput = z.infer<typeof termsSchema>;
