const express = require('express');

const OngController = require('./controllers/OngController');
const OngValidator = require('./validators/OngValidator');

const IncidentController = require('./controllers/IncidentController');
const IncidentValidator = require('./validators/IncidentValidator');

const ProfileController = require('./controllers/ProfileController');
const ProfileValidator = require('./validators/ProfileValidator');

const SessionController = require('./controllers/SessionController');
const SessionValidator = require('./validators/SessionValidator');

const routes = express.Router();

routes.post('/sessions', SessionValidator.store, SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngValidator.store, OngController.store);

routes.get('/incidents', IncidentValidator.index, IncidentController.index);
routes.post('/incidents', IncidentValidator.store, IncidentController.store);
routes.delete(
  '/incidents/:id',
  IncidentValidator.destroy,
  IncidentController.destroy
);

routes.get('/profile', ProfileValidator.index, ProfileController.index);

module.exports = routes;
