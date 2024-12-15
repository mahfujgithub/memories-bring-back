import z from 'zod';

const createGalleryItemZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    img: z.string({
      required_error: 'field is required!',
    }),
    url: z.string().optional(),    
    videoUrl: z.string().optional(),    
    zoom: z.string().optional(),
  }),
});

const updateGalleryItemZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    img: z.string().optional(),
    url: z.string().optional(),
    videoUrl: z.string().optional(),    
    zoom: z.string().optional(),
  }),
});

export const GalleryItemValidation = {
  createGalleryItemZodSchema,
  updateGalleryItemZodSchema,
};
