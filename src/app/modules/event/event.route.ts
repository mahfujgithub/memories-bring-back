import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { TitleValidation } from './event.validation';
import { EventItemController } from './event.controller';
const router = express.Router();

router.post(
  '/create',
  validateRequest(TitleValidation.createEventZodSchema),
  EventItemController.createEventItem,
);

router.get('/', EventItemController.getEventItems);

router.get('/:id', EventItemController.getSingleEventItem);

// update story route route here
router.patch(
  '/:id',
  validateRequest(TitleValidation.updateEventZodSchema),
  EventItemController.updateEventItem,
);

// delete story route
router.delete('/:id', EventItemController.removeEventItem);

export const EventRoutes = router;
