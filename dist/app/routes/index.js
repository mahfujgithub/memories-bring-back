"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const slider_route_1 = require("../modules/slider/slider.route");
const gallery_route_1 = require("../modules/gallery/gallery.route");
const storey_route_1 = require("../modules/story/storey.route");
const video_route_1 = require("../modules/video/video.route");
const music_route_1 = require("../modules/music/music.route");
const user_route_1 = require("../modules/user/user.route");
const auth_route_1 = require("../modules/auth/auth.route");
const title_route_1 = require("../modules/title/title.route");
const event_route_1 = require("../modules/event/event.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/user',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: '/title',
        route: title_route_1.TitleRoutes,
    },
    {
        path: '/event',
        route: event_route_1.EventRoutes,
    },
    {
        path: '/slider',
        route: slider_route_1.SliderRoutes,
    },
    {
        path: '/gallery',
        route: gallery_route_1.GalleryRoutes,
    },
    {
        path: '/storey',
        route: storey_route_1.StoreyRoutes,
    },
    {
        path: '/video',
        route: video_route_1.VideoRoutes,
    },
    {
        path: '/music',
        route: music_route_1.MusicRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
