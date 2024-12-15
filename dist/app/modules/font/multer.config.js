"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
// Define a custom file filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['.ttf', '.otf', '.woff', '.woff2'];
    const ext = path_1.default.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
        cb(null, true); // Accept the file
    }
    else {
        cb(new Error('Invalid file type. Only font files are allowed.'));
    }
};
// Define the storage engine
const storage = multer_1.default.diskStorage({
    // Set destination folder
    destination: (req, file, cb) => {
        const folder = 'uploads/fonts'; // Adjust as per your requirement
        cb(null, folder);
    },
    // Customize file name
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const ext = path_1.default.extname(file.originalname); // Get file extension
        const fileName = `${timestamp}-${file.originalname}`;
        cb(null, fileName); // e.g., "1678901234567-fontname.ttf"
    },
});
// Set file size limit (optional, in bytes)
const limits = {
    fileSize: 5 * 1024 * 1024, // 5 MB
};
// Multer upload instance
const upload = (0, multer_1.default)({
    storage,
    fileFilter,
    limits,
});
exports.default = upload;
