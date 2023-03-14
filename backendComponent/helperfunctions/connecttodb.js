import clientPromise from "../connection";
export const connectFunction = async () => {
    try {
      const client = await clientPromise;
      const db = await client.db("Hosteller_DB")
      const collection = await db.collection("general");
      const myDoc = await collection.findOne({connect:'true'});
      console.log(myDoc.connect);
      if(myDoc.connect=='true') {
        console.log("!!!! Database Successfully Connected !!!!");
      }
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