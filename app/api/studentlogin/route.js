import { NextResponse } from 'next/server'
import clientPromise from '../../../backendComponent/connection'

export async function POST(request) {
  const data = await request.json();
  const client = await clientPromise;
  const db = await client.db('Hosteller_DB');
  const abc = await db.collection('studentDetails').find({email:data.email,password:data.password}).toArray();
  if(abc!=null){
    console.log("Data retrived Successfully");
    return NextResponse.json({ msg: abc, status: 200 });
  }
  else{
    return NextResponse.json({ msg: "not found", status: 500 });
  }
  return abc[0];
}
