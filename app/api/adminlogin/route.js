import { NextResponse } from "next/server";
import clientPromise from "../../../backendComponent/connection";

export async function POST(request) {
  try {
    const data = await request.json();
    const client = await clientPromise;
    const db = await client.db("Hosteller_DB");
    const abc = await db
      .collection("adminDetails")
      .find({ email: data.email, password: data.password })
      .toArray();
    if (abc[0] != null) {
      console.log("login ", abc);
      return NextResponse.json({ msg: abc, status: 200 });
    } else {
      return NextResponse.json({ msg: "not found", status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ msg: error, status: 500 });
  }
}
