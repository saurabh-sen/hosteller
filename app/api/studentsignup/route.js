import { NextResponse } from 'next/server'
export async function POST(request) {
  const data = await request.json();
  // data = {name: 'Hiroko Steele',email: 'hydep@mailinator.com',phone: '+1 (844) 681-5521',rollno: '550',password: 'Pa$$w0rd!'} from student login page
  console.log(data)
  return NextResponse.json({ status: 200, msg: "hello from backend" })
}
