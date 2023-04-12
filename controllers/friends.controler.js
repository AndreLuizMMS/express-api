const friends = require('../models/friends.model');

function postFriends(req, res) {
  if (!req.body.name) {
    res.status(400).json({ error: 'no name' });
  } else {
    const newFriend = {
      friend: req.body.name,
      id: friends.length
    };

    friends.push(newFriend);
    res.json(newFriend);
  }
}

function getFriends(req, res) {
  res.status(200).json(friends);
}

function getFriendById(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: 'Friend does not exist'
    });
  }
}

module.exports = {
  postFriends,
  getFriends,
  getFriendById
};
