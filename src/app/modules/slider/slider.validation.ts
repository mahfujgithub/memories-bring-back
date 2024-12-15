import z from 'zod';

const createSliderItemZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'field is required!',
    }),
    des: z.string({
      required_error: 'field is required!',
    }),
    img: z.string({
      required_error: 'field is required!',
    }),
  }),
});

const updateSliderItemZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    des: z.string().optional(),
    img: z.string().optional(),
  }),
});

export const SliderItemValidation = {
  createSliderItemZodSchema,
  updateSliderItemZodSchema,
};
