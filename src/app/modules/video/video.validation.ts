import z from 'zod';

const createVideoItemZodSchema = z.object({
  body: z.object({
    url: z.string({
      required_error: 'field is required!',
    })
  }),
});

const updateVideoItemZodSchema = z.object({
  body: z.object({
    url: z.string().optional(),
  }),
});

export const VideoItemValidation = {
  createVideoItemZodSchema,
  updateVideoItemZodSchema,
};
