"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({
            required_error: 'Email is required!',
        })
            .email('Invalid email format!'),
        password: zod_1.z
            .string({
            required_error: 'Password is required!',
        })
            .min(6, 'Password must be at least 6 characters long!'),
        role: zod_1.z.enum(['Admin', 'Guest'], {
            required_error: 'Role is required!',
            invalid_type_error: 'Role must be either Admin or Guest!',
        }),
    }),
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email('Invalid email format!').optional(), // Email is optional for update
        password: zod_1.z
            .string()
            .min(6, 'Password must be at least 6 characters long!')
            .optional(), // Password is optional for update
        role: zod_1.z
            .enum(['Admin', 'Guest'], {
            invalid_type_error: 'Role must be either Admin or Guest!',
        })
            .optional(), // Role is optional for update
    }),
});
exports.UserValidation = {
    createUserZodSchema,
    updateUserZodSchema,
};
