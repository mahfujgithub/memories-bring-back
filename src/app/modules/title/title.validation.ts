import z from 'zod';

const createTitleZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'field is required!',
    }),
    des: z.string({
      required_error: 'field is required!',
    })
  }),
});

const updateTitleZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    des: z.string().optional()
  }),
});

export const TitleValidation = {
  createTitleZodSchema,
  updateTitleZodSchema,
};
