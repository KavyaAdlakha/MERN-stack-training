import { MongoClient } from 'mongodb';

// Correct connection string (ensure username and password are correct)
const uri = "mongodb+srv://adlakhakavya8:@cluster0.jteemdk.mongodb.net/";

async function connectToMongoDB() {
  try {
    // Create MongoDB client
    const client = new MongoClient(uri);

    // Connect to MongoDB Atlas
    await client.connect();
    console.log("Connected successfully to MongoDB Atlas");

    const database = client.db("testDB");  // Replace with your database name
    const collection = database.collection("myCollection");

    // Insert sample data if collection is empty
    const existingDocuments = await collection.countDocuments();
    if (existingDocuments === 0) {
      const sampleData = [
        { name: "John Doe", age: 28, email: "john@example.com" },
        { name: "Jane Smith", age: 34, email: "jane@example.com" },
        { name: "Emma Johnson", age: 22, email: "emma@example.com" },
      ];
      const insertResult = await collection.insertMany(sampleData);
      console.log(`${insertResult.insertedCount} documents inserted into the collection.`);
    } else {
      console.log("Collection already contains data. No new data inserted.");
    }

    // Fetch and display documents
    const documents = await collection.find({}).toArray();
    console.log("Documents retrieved from the collection:");
    console.log(documents);

    // Close the connection
    await client.close();
    console.log("Connection closed successfully.");
    
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error.message);
  }
}

connectToMongoDB();