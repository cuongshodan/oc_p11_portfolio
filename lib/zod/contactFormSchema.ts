import { z } from "zod";

// Zod schema for contact form
export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().optional(),
  country: z.string().min(1, "Please select a country"),
  message: z.string().min(1, "Message is required"),
  agreed: z
    .boolean()
    .refine((val) => val, "You must agree to the privacy policy"),
  botField: z.string().length(0, "No bots allowed!"), // honeypot
  recaptchaToken: z.string().min(1, "Missing reCAPTCHA token"),
});

// Derive TypeScript type from the schema
export type ContactFormData = z.infer<typeof contactFormSchema>;
