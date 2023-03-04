"use client"
import React from 'react'
import Login from "../../../frontendComponent/Login"
const Page = () => {

  const handleSubmit = () => {
    console.log("admin login")
  }

  return (
    <>
      <Login handleSubmit={handleSubmit} />
    </>
  )
}

export default Page