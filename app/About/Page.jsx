import Footer from '@/frontendComponent/Footer'
import NavBar from '@/frontendComponent/Navbar'
import React from 'react'

const Page = () => {
  return (
    <section className="about__page">
      <NavBar />
      <div className="about__container">
        {/* vishal code goes here */}
        <h1>About Page</h1>
      </div>
      <Footer footerbg1={"gray-700"} footerbg2={"gray-800"}/>
    </section>
  )
}

export default Page