import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { GalleryItemValidation } from './gallery.validation';
import { GalleryController } from './gallery.controller';
const router = express.Router();

router.post(
  '/create',
  validateRequest(GalleryItemValidation.createGalleryItemZodSchema),
  GalleryController.createGalleryItem,
);

router.get('/', GalleryController.getGalleryItems);

// update slider
router.patch(
  '/:id',
  validateRequest(GalleryItemValidation.updateGalleryItemZodSchema),
  GalleryController.updateGalleryItem,
);

// delete slider
router.delete('/:id', GalleryController.removeGalleryItem);

export const GalleryRoutes = router;
