"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const video_validation_1 = require("./video.validation");
const video_controller_1 = require("./video.controller");
const router = express_1.default.Router();
router.post('/create', (0, validateRequest_1.default)(video_validation_1.VideoItemValidation.createVideoItemZodSchema), video_controller_1.VideoItemController.createVideoItem);
router.get('/', video_controller_1.VideoItemController.getVideoItems);
// delete video
router.delete('/:id', video_controller_1.VideoItemController.removeVideoItem);
exports.VideoRoutes = router;
