const { Router } = require('express');
const UserController = require('./app/controllers/UserController');

const routes = Router();

routes.get('/users', UserController.index);

routes.get('/users/:id', UserController.show);

routes.post('/users', UserController.store);

routes.put('/users/:id', UserController.update);

routes.delete('/users/:id', UserController.destroy);

module.exports = routes;