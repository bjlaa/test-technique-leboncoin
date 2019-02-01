var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, x-Requested-With, Content-Type, Accept");
	next();
});

// The message list where will be stored the messages
// the user posts
var messages = [
	{
		id: 0,
		text: 'This is a test',
		private: false
	},
	{
		id: 2,
		text: 'This is a test',
		private: false
	}
];

app.listen(4000, () => {
 console.log("Server running on port 4000");
});

// Fetch the messages list
app.get("/api/messages", (req, res, next) => {
    res.json(messages);
});

// Create a new message and add it to the messages list
app.post("/api/messages/create", (req, res) => {
	console.log(req.body)
    const message = { 'id': messages.length, 'text': req.body.text, 'private': req.body.private};

    messages.push(message);
    res.sendStatus(200);
});
