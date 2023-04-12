const express = require('express');

const messagesControler = require('../controllers/messages.controler');

const messagesRouter = express.Router();

messagesRouter.get('/', messagesControler.getMessages);
messagesRouter.post('/', messagesControler.postMessages);

module.exports = messagesRouter;
