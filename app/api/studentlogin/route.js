import { NextResponse } from 'next/server'
export async function POST(request) {
  const data = await request.json();
  // data = { email: 'asdf', password: 'asfaf', role: 'admin' } from admin/mess_incharge login page
  // data = { email: 'asdf', password: 'asfaf', role: '' } from student login page
  console.log(data)
  return NextResponse.json({ status: 200, msg: "hello from backend" })
}
