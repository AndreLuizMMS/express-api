const express = require('express');

const friendsRouter = require('./routers/friends.router');
const messagesRouter = require('./routers/messages.router');

const latency = require('./middlewares/latency');

const app = express();
const PORT = 3000;

//middlewares
app.use(latency);
app.use(express.json());

// Routers
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => console.log(`Running on ${PORT}`));
