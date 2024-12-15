import express from 'express';
import { SliderRoutes } from '../modules/slider/slider.route';
import { GalleryRoutes } from '../modules/gallery/gallery.route';
import { StoreyRoutes } from '../modules/story/storey.route';
import { VideoRoutes } from '../modules/video/video.route';
import { MusicRoutes } from '../modules/music/music.route';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { TitleRoutes } from '../modules/title/title.route';
import { EventRoutes } from '../modules/event/event.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/title',
    route: TitleRoutes,
  },
  {
    path: '/event',
    route: EventRoutes,
  },
  {
    path: '/slider',
    route: SliderRoutes,
  },
  {
    path: '/gallery',
    route: GalleryRoutes,
  },
  {
    path: '/storey',
    route: StoreyRoutes,
  },
  {
    path: '/video',
    route: VideoRoutes,
  },
  {
    path: '/music',
    route: MusicRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
