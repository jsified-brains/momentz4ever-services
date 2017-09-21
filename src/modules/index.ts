import AlbumRoutes from './album/album.routes';
import UserRoutes from './user/user.route';
import PhotoRoutes from './photo/photo.routes';
import * as express from 'express';

function route(route){
    return `/api/v1/${route}`;
}
const AppRoutes  = (app: express.Express) => {
    app.use(route('albums'), AlbumRoutes);
    app.use(route('users'), UserRoutes);
    app.use(route('photos'), PhotoRoutes);
}

export default AppRoutes;
