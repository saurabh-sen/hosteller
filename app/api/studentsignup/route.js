import  { NextResponse } from 'next/server'
import clientPromise from '../../../backendComponent/connection'

export async function POST(request){

  // thunderclient

  try {
    const data = await request.json();
    console.log(data);
    const client = await clientPromise;
    const db = await client.db('Hosteller_DB');
    const abc = await db.collection('studentDetails').insertOne(data); 
    if(abc){
      console.log("Data saved Successfully");
      return NextResponse.json({ msg: "created success", status: 200 });
    }
    else{
      return NextResponse.json({ msg: "something broke at mongodb atlas", status: 503 });
    }
  } catch (error) {
    return NextResponse.json({ data: error, status: 500 });
  }
   

}
