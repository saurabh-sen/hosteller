import NavBar from '@/frontendComponent/Navbar'
import Overview from '@/frontendComponent/Overview/student/index.jsx'
import StudentEase from '@/frontendComponent/Ease/student'
import Events from '@/frontendComponent/Events'
import React from 'react'
import Footer from '@/frontendComponent/Footer'

const page = () => {
  return (
    <div className='student__dashboard'>
        <NavBar login={true} />
        <Overview />
        <StudentEase />
        <Events />
        <Footer footerbg1="gray-800" footerbg2="gray-700" />
    </div>
  )
}

export default page