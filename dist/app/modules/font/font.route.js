"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontRoutes = void 0;
const express_1 = __importDefault(require("express"));
const font_controller_1 = require("./font.controller");
const multer_config_1 = __importDefault(require("./multer.config"));
const router = express_1.default.Router();
// const upload = multer({ dest: 'uploads/fonts/' });
router.post('/upload', multer_config_1.default.single('file'), font_controller_1.FontController.uploadFont);
// Get all fonts
router.get('/', font_controller_1.FontController.getFonts);
// Remove a font by ID
router.delete('/:id', font_controller_1.FontController.removeFont);
exports.FontRoutes = router;
