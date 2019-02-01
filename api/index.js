var express = require("express");
var app = express();
app.use(express.json());

// The message list where will be stored the messages
// the user posts
var messages = [];

app.listen(4000, () => {
 console.log("Server running on port 4000");
});

// Fetch the messages list
app.get("/api/messages", (req, res, next) => {
    res.json(messages);
});

// Create a new message and add it to the messages list
app.post("/api/achievement", (req, res) => {
    const message = { 'id': messages.length, 'text': req.body.text, 'private': req.body.private};

    messages.push(message);
    res.sendStatus(200);
});
