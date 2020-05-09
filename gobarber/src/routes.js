import { Router } from 'express';
import User from './app/models/User';

import UsersController from './app/controllers/UsersController';

const routes = new Router();

routes.post('/users', UsersController.store);

export default routes;
