import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { StoreyItemValidation } from './storey.validation';
import { SliderItemController } from './storey.controller';
const router = express.Router();

router.post(
  '/create',
  validateRequest(StoreyItemValidation.createStoreyItemZodSchema),
  SliderItemController.createStoreyItem,
);

router.get('/', SliderItemController.getStoreyItems);

router.get('/:id', SliderItemController.getSingleStoreyItem);

// update story route here
router.patch(
  '/:id',
  validateRequest(StoreyItemValidation.updateStoreyItemZodSchema),
  SliderItemController.updateStoreyItem,
);

// delete story route here 
router.delete('/:id', SliderItemController.removeStoreyItem);

export const StoreyRoutes = router;
