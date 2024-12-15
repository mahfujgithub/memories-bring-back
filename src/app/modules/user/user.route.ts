import express from 'express';
const router = express.Router();
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';

router.post(
  '/create',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser,
);

router.get('/', UserController.getAllUser);

router.get('/:id', UserController.getSingleUser);

// update slider
router.patch(
  '/:id',
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser,
);

router.delete(
  '/:id',
  UserController.deleteUser,
);

export const UserRoutes = router;
