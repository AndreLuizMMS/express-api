const express = require('express');

const friendsControler = require('../controllers/friends.controler');

const friendsRouter = express.Router();

friendsRouter.post('/', friendsControler.postFriends);
friendsRouter.get('/', friendsControler.getFriends);
friendsRouter.get('/:friendId', friendsControler.getFriendById);

module.exports = friendsRouter;
