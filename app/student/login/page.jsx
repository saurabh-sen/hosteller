"use client"
import React from 'react'
import Login from "../../../frontendComponent/Login"

const Page = () => {
  
  const handleSubmit = () => {
    console.log("student login")
  }

  return (
    <>
      <Login handleSubmit={handleSubmit} student={true} />
    </>
  )
}

export default Page