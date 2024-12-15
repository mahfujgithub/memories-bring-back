import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TitleValidation } from './title.validation';
import { TitleController } from './title.controller';
const router = express.Router();

router.post(
  '/create',
  validateRequest(TitleValidation.createTitleZodSchema),
  TitleController.createTitleItem,
);

router.get('/', TitleController.getTitleItems);

router.get('/:id', TitleController.getSingleTitleItem);

// update story route
router.patch(
  '/:id',
  validateRequest(TitleValidation.updateTitleZodSchema),
  TitleController.updateTitleItem,
);

// delete story route
router.delete('/:id', TitleController.removeTitleItem);

export const TitleRoutes = router;
