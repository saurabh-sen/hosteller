import { NextResponse } from "next/server";
import clientPromise from "../../../backendComponent/connection";

export async function POST(request) {
  try {
    const data = await request.json();
    const client = await clientPromise;
    const db = await client.db("Hosteller_DB");
    const abc = await db.collection("studentDetails").insertOne(data);
    console.log(abc.insertedId)
    if (abc.insertedId) {
      // console.log("Data saved Successfully");
      return NextResponse.json({ msg: "created success", status: 200 });
    } else {
      return NextResponse.json({
        msg: "details not saved",
        status: 500,
      });
    }
  } catch (error) {
    return NextResponse.json({ msg: error, status: 500 });
  }
}
