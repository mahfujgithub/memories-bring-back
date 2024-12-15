import z from 'zod';

const createMusicItemZodSchema = z.object({
  body: z.object({
    musicUrl: z
      .array(
        z.string({
          required_error: 'Each URL must be a string!',
        }),
      )
      .nonempty({
        message: 'musicUrl must contain at least one URL!',
      }),
  }),
});



export const MusicItemValidation = {
  createMusicItemZodSchema,
};
