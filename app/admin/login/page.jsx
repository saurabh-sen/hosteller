"use client"
import React from 'react'
import Login from "../../../frontendComponent/Login"
const Page = () => {

  // const postData = (authInfo) => {
  //   fetch("/api/auth", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(authInfo),
  //   })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));
  // }
  return (
    <>
      <Login postData={postData} student={0} />
      <Login student={0} />
      {/* <Login postData={postData} student={0} /> */}
    </>
  )
}

export default Page