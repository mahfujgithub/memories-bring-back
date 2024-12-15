"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const gallery_validation_1 = require("./gallery.validation");
const gallery_controller_1 = require("./gallery.controller");
const router = express_1.default.Router();
router.post('/create', (0, validateRequest_1.default)(gallery_validation_1.GalleryItemValidation.createGalleryItemZodSchema), gallery_controller_1.GalleryController.createGalleryItem);
router.get('/', gallery_controller_1.GalleryController.getGalleryItems);
// update slider
router.patch('/:id', (0, validateRequest_1.default)(gallery_validation_1.GalleryItemValidation.updateGalleryItemZodSchema), gallery_controller_1.GalleryController.updateGalleryItem);
// delete slider
router.delete('/:id', gallery_controller_1.GalleryController.removeGalleryItem);
exports.GalleryRoutes = router;
