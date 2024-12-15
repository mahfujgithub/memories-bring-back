"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const title_validation_1 = require("./title.validation");
const title_controller_1 = require("./title.controller");
const router = express_1.default.Router();
router.post('/create', (0, validateRequest_1.default)(title_validation_1.TitleValidation.createTitleZodSchema), title_controller_1.TitleController.createTitleItem);
router.get('/', title_controller_1.TitleController.getTitleItems);
router.get('/:id', title_controller_1.TitleController.getSingleTitleItem);
// update story route
router.patch('/:id', (0, validateRequest_1.default)(title_validation_1.TitleValidation.updateTitleZodSchema), title_controller_1.TitleController.updateTitleItem);
// delete story route
router.delete('/:id', title_controller_1.TitleController.removeTitleItem);
exports.TitleRoutes = router;
