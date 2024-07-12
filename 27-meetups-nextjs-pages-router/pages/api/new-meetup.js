import { MongoClient } from "mongodb";

const dbUrl =
  "mongodb+srv://<username>:<password>@demo-project.nle5kvk.mongodb.net/?retryWrites=true&w=majority&appName=demo-project";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(dbUrl);
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
