import z from 'zod';

const createStoreyItemZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'field is required!',
    }),
    des: z.string({
      required_error: 'field is required!',
    }),
    images: z.array(z.string(), {
      required_error: 'field is required!',
    }),
    musicUrl:z.string().optional()
  }),
});

const updateStoreyItemZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    des: z.string().optional(),
    img: z.string().optional(),
    musicUrl: z.string().optional(),
  }),
});

export const StoreyItemValidation = {
  createStoreyItemZodSchema,
  updateStoreyItemZodSchema,
};
