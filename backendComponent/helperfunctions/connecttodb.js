export const connectFunction = async () => {
    try {
      const client = await clientPromise;
      const db = client.db("Hosteller_DB")
      const collection = await db.collection("general");
      const myDoc = await collection.find({})
             .limit(10)
             .toArray();
      return {
        isConnected: true,
        data: "connected to mongodb",
      };
    } catch (error) {
      return { 
        isConnected: false,
        data: error,
      };
    }
  }