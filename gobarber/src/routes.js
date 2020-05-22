import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import User from './app/models/User';

import UsersController from './app/controllers/UsersController';
import SessionsController from './app/controllers/SessionsController';
import FilesController from './app/controllers/FilesController';
import ProvidersController from './app/controllers/ProvidersController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UsersController.store);
routes.post('/sessions', SessionsController.store);

routes.use(authMiddleware);
routes.put('/users', UsersController.update);
routes.post('/files', upload.single('file'), FilesController.store);
routes.get('/providers', ProvidersController.index);

export default routes;
