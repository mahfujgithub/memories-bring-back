import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: 'Email is required!',
      })
      .email('Invalid email format!'),
    password: z
      .string({
        required_error: 'Password is required!',
      })
      .min(6, 'Password must be at least 6 characters long!'),
    role: z.enum(['Admin', 'Guest'], {
      required_error: 'Role is required!',
      invalid_type_error: 'Role must be either Admin or Guest!',
    }),
  }),
});


const updateUserZodSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email format!').optional(), // Email is optional for update
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long!')
      .optional(), // Password is optional for update
    role: z
      .enum(['Admin', 'Guest'], {
        invalid_type_error: 'Role must be either Admin or Guest!',
      })
      .optional(), // Role is optional for update
  }),
});


export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema,
};