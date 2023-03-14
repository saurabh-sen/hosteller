"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../../../frontendComponent/Login/login.module.css'
import { studentsignupdata } from "@/backendComponent/helperfunctions/studentsignupdata"

const page = () => {

  const [signUpData, setSignUpData] = useState({
    name: '',
    email: '',
    phone: '',
    rollno: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, rollno, password } = signUpData;
    if (name === '' || email === '' || phone === '' || rollno === '' || password === '') {
      alert('Please fill all the fields');
    } else {
      studentsignupdata(signUpData)
    }
  }

  return (
    <div className="min-h-screen bg-gray-700 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#fd9393] to-[#eb2572] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="relative px-4 py-10 bg-gradient-to-r from-[#deff7f] to-[#ff8af6] shadow-2xl sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">WelCome, Please enter your details below</h1>
              <p className="text-sm font-semibold">Already have an account? <Link href='/student/login' className='underline text-[#0048b8]'>Login here!</Link></p>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input onChange={(e) => setSignUpData((prev) => prev = {...prev, name: e.target.value})} autoComplete="off" id="fullname" name="fullname" type="text" className="bg-transparent  peer placeholder-transparent h-10 w-full border-b-2 border-gray-100 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Your Full Name" />
                  <label htmlFor="fullname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Your Full Name</label>
                </div>
                <div className="relative">
                  <input onChange={(e) => setSignUpData((prev) => prev = {...prev, email: e.target.value})} autoComplete="off" id="email" name="email" type="email" className="peer bg-transparent placeholder-transparent h-10 w-full border-b-2 border-gray-100 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Yours College Email" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Yours College Email</label>
                </div>
                <div className="relative">
                  <input onChange={(e) => setSignUpData((prev) => prev = {...prev, phone: e.target.value})} autoComplete="off" id="phone" name="phone" type="tel" className="peer bg-transparent placeholder-transparent h-10 w-full border-b-2 border-gray-100 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="phone" />
                  <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mobile No.</label>
                </div>
                <div className="relative">
                  <input onChange={(e) => setSignUpData((prev) => prev = {...prev, rollno: e.target.value})} autoComplete="off" id="rollno" name="rollno" type="text" className="peer bg-transparent placeholder-transparent h-10 w-full border-b-2 border-gray-100 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Roll Number" />
                  <label htmlFor="rollno" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Roll Number</label>
                </div>
                <div className="relative">
                  <input onChange={(e) => setSignUpData((prev) => prev = {...prev, password: e.target.value})} autoComplete="off" id="password" name="password" type="password" className="peer bg-transparent placeholder-transparent h-10 w-full border-b-2 border-gray-100 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div className="relative">
                  <button className={styles.login__button} onClick={(e)=>handleSubmit(e)}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;