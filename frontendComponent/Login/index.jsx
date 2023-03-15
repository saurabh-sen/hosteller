"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './login.module.css'
import Alert from "@/frontendComponent/Alert"
import { useDispatch} from 'react-redux'
import { setAlert } from '@/app/GlobalState/Slices/Alert/AlertSllice'

const Index = ({ studentlogindata, student }) => {

  const dispatch = useDispatch();

  const [authInfo, setAuthInfo] = useState({
    email: "",
    password: "",
    role: "",
  });

  const submitButton = async (e) => {
    e.preventDefault();
    // to check every field is filled or not
    if((!student && authInfo.role === "") || authInfo.email === "" || authInfo.password === "")
    return dispatch(setAlert({ title: "Login Failed ⚠", message: "Please fill all the fields! 🤔", type: "error"}));

    // to respond to the user that data is being fetched
    dispatch(setAlert({ title: "Please wait... 🥺", message: "Retrieving data, this may take some moments.🤗", type: "info"}));

    // to fetch data from the backend
    const data = await studentlogindata(authInfo);
    // to check if data is fetched successfully or not
    if(data.status === 200)return dispatch(setAlert({ title: "Login success 😃", message: "You'll be redirected to dashboard 🚀", type: "success"}));
    else return dispatch(setAlert({ title: "Login Failed 🥺", message: `Credentials not found, Please sign up first! 🤔. More info:- ${data.msg}`, type: "error"}));
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
              <h1 className="text-2xl font-semibold">WelCome back, Please enter your credentials below</h1>
              {
                student ? <p className="text-sm font-semibold">Don&apos;t have an account? <Link href='/student/signup' className='underline text-[#0048b8]'>Click Here to apply!</Link></p>
                : 
                ""
              }
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={(e) => submitButton(e)} className="py-8 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7">
                { !student &&
                <div className="relative">
                  <select onChange={(e) => setAuthInfo((prev) => prev = {...prev, role:e.target.selectedOptions[0].value})} autoComplete="off" id="role" name="role" className=" text-gray-600 bg-transparent  peer placeholder-transparent h-10 w-full border-2 border-gray-100 focus:outline-none focus:borer-rose-600" multiple={false} >
                    <option className='bg-[#edcdb3] hover:bg-[#d8c0ad]' selected disabled value="select">Please select a role...</option>
                    <option className='bg-[#edcdb3] hover:bg-[#d8c0ad]' value="admin">Admin</option>
                    <option className='bg-[#edcdb3] hover:bg-[#c4b0a0]' value="messincharge">Mess Incharge</option>
                  </select>
                </div>
                }
                <div className="relative">
                  <input onChange={(e) => setAuthInfo((prev) => prev = {...prev, email:e.target.value})} autoComplete="off" id="email" name="email" type="text" className="bg-transparent  peer placeholder-transparent h-10 w-full border-b-2 border-gray-100 text-gray-600 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                </div>
                <div className="relative">
                  <input onChange={(e) => setAuthInfo((prev) => prev = {...prev, password:e.target.value})} autoComplete="off" id="password" name="password" type="password" className="peer bg-transparent placeholder-transparent h-10 w-full border-b-2 border-gray-100 text-gray-600 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                </div>
                <div className="relative">
                  <button className={`${styles.login__button} bg-[#374151ba]`} type='submit' onClick={(e) => submitButton(e)}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Alert />
    </div>
  )
}

export default Index