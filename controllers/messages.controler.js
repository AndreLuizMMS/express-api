function getMessages(req, res) {
  console.log('getting new messages ');
  res.status(200).json({ get: 'ok' });
}

function postMessages(req, res) {
  console.log('posting new messages ');
  res.status(200).json({ post: 'ok' });
}

module.exports = {
  getMessages,
  postMessages
};
