"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const storey_validation_1 = require("./storey.validation");
const storey_controller_1 = require("./storey.controller");
const router = express_1.default.Router();
router.post('/create', (0, validateRequest_1.default)(storey_validation_1.StoreyItemValidation.createStoreyItemZodSchema), storey_controller_1.SliderItemController.createStoreyItem);
router.get('/', storey_controller_1.SliderItemController.getStoreyItems);
router.get('/:id', storey_controller_1.SliderItemController.getSingleStoreyItem);
// update story route here
router.patch('/:id', (0, validateRequest_1.default)(storey_validation_1.StoreyItemValidation.updateStoreyItemZodSchema), storey_controller_1.SliderItemController.updateStoreyItem);
// delete story route here 
router.delete('/:id', storey_controller_1.SliderItemController.removeStoreyItem);
exports.StoreyRoutes = router;
