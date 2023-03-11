"use client"
import React, { useEffect } from 'react'
import Login from "../../../frontendComponent/Login"
import { studentlogindata } from "@/backendComponent/helperfunctions/studentlogindata"

const Page = () => {

  return (
    <>
      <Login studentlogindata={studentlogindata} student={1} />
    </>
  )
}

export default Page