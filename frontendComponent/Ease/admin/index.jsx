"use client"
import React, { useEffect, useState } from 'react'
import AdmissionModal from "@/frontendComponent/Modals/AdmissionModal"
import EventsModal from "@/frontendComponent/Modals/EventsModal"
import FeedbackModal from "@/frontendComponent/Modals/FeedbackModal"
const Index = () => {

  const [showAdmissionModal, setShowAdmissionModal] = useState(false);
  const [showEventsModal, setShowEventsModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useEffect(() => {
    if (showAdmissionModal || showEventsModal || showFeedbackModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showAdmissionModal, showEventsModal, showFeedbackModal])


  return (
    <section className='student__ease bg-gray-800'>
      <div className=" px-5 py-16 mx-auto max-w-6xl">
        <h1 className='sm:text-3xl md:text-4xl text-2xl my-12 mx-4 text-white font-semibold'>Admin Ease</h1>

        <div className="student__ease__containers flex justify-evenly flex-wrap space-y-4 md:space-y-0">
          <div onClick={() => setShowAdmissionModal(true)} className="leave__query border border-gray-600 hover:shadow-[-5px_7px_18px_#27cfef] transition-shadow duration-300 px-6 py-5 rounded-lg bg-gradient-to-r from-indigo-400 to-cyan-400 bg-gray-700 space-y-3 cursor-pointer w-[250px] h-[250px] text-center">
            <div className="cover px-6 py-5 rounded-lg  space-y-3 flex h-full w-full sm:flex justify-center items-center flex-col">
              <p className="leave__query__header text-gray-500 text-lg sm:text-xl md:text-3xl font-bold break-words mb-3">
                New Applications
              </p>
              <svg aria-hidden="true" className=" transition-all duration-300 w-8 h-8 ml-2 -mr-1" color='grey' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM123.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L281 232.7l-15.3-36.8C248.5 154.8 208.3 128 163.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1L68.7 398 9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L116.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM550.6 153.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L530.7 224H384c-17.7 0-32 14.3-32 32s14.3 32 32 32H530.7l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3l-80-80z" />
              </svg>
            </div>
          </div>
          <div onClick={() => setShowEventsModal(true)} className="events border border-gray-600 hover:shadow-[-5px_7px_18px_#f6ef8c] transition-shadow duration-300 px-6 py-5 rounded-lg bg-gradient-to-r from-teal-400 to-yellow-200 bg-gray-700 space-y-3 cursor-pointer w-[250px] h-[250px] text-center">
            <div className="cover px-6 py-5 rounded-lg  space-y-3 flex h-full w-full sm:flex justify-center items-center flex-col">
              <p className="leave__query__header text-gray-500 text-lg sm:text-xl md:text-3xl font-bold break-words mb-3">
                Add Events
              </p>
              <svg aria-hidden="true" className=" transition-all duration-300 w-8 h-8 ml-2 -mr-1" color='grey' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
            </div>
          </div>
          <div onClick={() => setShowFeedbackModal(true)} className="complaints border border-gray-600 hover:shadow-[-5px_7px_18px_#f8d0ea] transition-shadow duration-300 px-6 py-5 rounded-lg bg-gradient-to-r from-violet-200 to-pink-200 space-y-3 cursor-pointer w-[250px] h-[250px] text-center">
            <div className="cover px-6 py-5 rounded-lg  space-y-3 flex h-full w-full sm:flex justify-center items-center flex-col">
              <p className="leave__query__header text-gray-500 text-lg sm:text-xl md:text-3xl font-bold break-words mb-3">
                View Feedback
              </p>
              <svg aria-hidden="true" className=" transition-all duration-300 w-8 h-8 ml-2 -mr-1" color='grey' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
            </div>
          </div>
        </div>
        {/* modal */}
        {showAdmissionModal ? (
            <AdmissionModal setShowAdmissionModal={setShowAdmissionModal} />
        ) : null}
        {showEventsModal ? (
            <EventsModal setShowEventsModal={setShowEventsModal} />
        ) : null}
        {showFeedbackModal ? (
            <FeedbackModal setShowFeedbackModal={setShowFeedbackModal} />
        ) : null}


      </div>
    </section>
  )
}

export default Index