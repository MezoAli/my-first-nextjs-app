import { MongoClient } from "mongodb";
async function newsLetterHandler(req, res) {
	const client = await MongoClient.connect(
		"mongodb+srv://MoutazAli:me7420zo@cluster0.vebfjx8.mongodb.net/events?retryWrites=true&w=majority"
	);
	const db = client.db();
	if (req.method === "POST") {
		const email = req.body.email;
		await db.collection("newsletter").insertOne({ email });
		client.close();
		res.status(201).json({ message: "successful added mail", email: email });
	}
}

export default newsLetterHandler;
