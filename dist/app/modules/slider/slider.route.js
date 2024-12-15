"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const slider_validation_1 = require("./slider.validation");
const slider_controller_1 = require("./slider.controller");
const router = express_1.default.Router();
router.post('/create', (0, validateRequest_1.default)(slider_validation_1.SliderItemValidation.createSliderItemZodSchema), slider_controller_1.SliderItemController.createSliderItem);
router.get('/', slider_controller_1.SliderItemController.getSliderItems);
// update slider
router.patch('/:id', (0, validateRequest_1.default)(slider_validation_1.SliderItemValidation.updateSliderItemZodSchema), slider_controller_1.SliderItemController.updateSliderItem);
// delete slider
router.delete('/:id', slider_controller_1.SliderItemController.removeSliderItem);
exports.SliderRoutes = router;
