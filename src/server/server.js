require("dotenv").config({ path: ".env" });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Pusher = require("pusher");
const Datastore = require("nedb");

const token =
	"20fb0e92da762675056d4a20533bcd30c25aa240a715a2e4a2b90912e9dc5bfc";

let nextcounter = 3;

let posts = [
	{
		id: 0,
		postTitle: "First-Post",
		postBody: "this is a test post #1",
		postedBy: "first post user",
		postCat: "technology",
		upvotes: 0,
		downvotes: 0,
		comments: [
			{
				postedBy: "first commenter",
				commentBody: "this is a great post!",
				upvotes: 0,
				downvotes: 0,
			},
			{
				postedBy: "second commenter",
				commentBody: "this is an okay post",
				upvotes: 0,
				downvotes: 0,
			},
		],
	},
	{
		id: 1,
		postTitle: "second-post",
		postBody: "this is a test post #2",
		postedBy: "second post user",
		postCat: "science",
		upvotes: 0,
		downvotes: 0,
		comments: [
			{
				postedBy: "first commenter",
				commentBody: "this post is fake news",
				upvotes: 0,
				downvotes: 0,
			},
			{
				postedBy: "second commenter",
				commentBody: "this post sucks",
				upvotes: 0,
				downvotes: 0,
			},
		],
	},
	{
		id: 2,
		postTitle: "third post",
		postBody: "this is a test post #3",
		postedBy: "third post user",
		postCat: "education",
		upvotes: 0,
		downvotes: 0,
		comments: [
			{
				postedBy: "first commenter",
				commentBody: "this is a test",
				upvotes: 0,
				downvotes: 0,
			},
			{
				postedBy: "second commenter",
				commentBody: "this hack will change the world",
				upvotes: 0,
				downvotes: 0,
			},
		],
	},
];

const servers = express();

const deebees = new Datastore();

const pusher = new Pusher({
	appId: process.env.PUSHER_APP_ID,
	key: process.env.PUSHER_APP_KEY,
	secret: process.env.PUSHER_APP_SECRET,
	cluster: process.env.PUSHER_APP_CLUSTER,
	useTLS: true,
});

servers.use(cors());
servers.use(bodyParser.urlencoded({ extended: false }));
servers.use(bodyParser.json());

servers.set("port", process.env.PORT || 5000);
const server = servers.listen(servers.get("port"), () => {
	console.log(`Express running → PORT ${server.address().port}`);
});

function authenticator(req, res, next) {
	const { authorization } = req.headers;
	if (authorization === token) {
		next();
	} else {
		res.status(403).json({ error: "User must be logged in to do that." });
	}
}

servers.get("/api/post", authenticator, (req, res) => {
	setTimeout(() => {
		res.send(posts);
	}, 1000);
});

servers.post("/api/login", (req, res) => {
	const { username, password } = req.body;
	if (username === "test" && password === "test") {
		req.loggedIn = true;
		res.status(200).json({
			payload: token,
		});
	} else {
		res.status(403).json({
			error: "Username or Password incorrect. Please see Readme",
		});
	}
});

servers.get("/api/db", (req, res) => {
	deebees.find({}, (err, data) => {
		if (err) return res.status(500).send(err);
		res.json(data);
	});
});

// prettier-ignore
servers.post("/api/posts", (req, res) => {
	deebees.insert(Object.assign({}, req.body), (err, newItem) => {
		if (err) {
			return res.status(500).send(err);
		}
		pusher.trigger("How-To", "new-post", {
            "post": req.body,
		});
		res.status(200).send(req.body);
	});
});
