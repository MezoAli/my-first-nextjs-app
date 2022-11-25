import { MongoClient } from "mongodb";
async function commentsHandler(req, res) {
	const eventId = req.query.eventId;
	const client = await MongoClient.connect(
		"mongodb+srv://MoutazAli:me7420zo@cluster0.vebfjx8.mongodb.net/events?retryWrites=true&w=majority"
	);
	const db = client.db();
	if (req.method === "POST") {
		const { name, email, text } = req.body;
		const newComment = { name, email, text, eventId };
		const result = await db.collection("comments").insertOne(newComment);

		newComment.id = result.insertedId;

		res.status(201).json({
			message: "successful added comment",
			newComment,
		});
	}

	if (req.method === "GET") {
		const documents = await db
			.collection("comments")
			.find()
			.sort({ _id: -1 })
			.toArray();

		res.status(200).json({ comments: documents });
	}
	client.close();
}

export default commentsHandler;
