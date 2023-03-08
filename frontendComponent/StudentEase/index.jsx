import React from 'react'

const index = () => {
  return (
    <section className='student__ease bg-gray-800'>
      <div className="md:space-x-8 px-5 py-16 mx-auto max-w-6xl">
        <h1 className='sm:text-3xl md:text-4xl text-2xl my-12 mx-4 text-white font-semibold'>Student Ease</h1>

        <div className="student__ease__containers flex justify-evenly flex-wrap space-y-4 md:space-y-0">
          <div className="leave__query border border-gray-600 hover:shadow-[8px_5px_28px_#272e3a,-5px_5px_20px_#475468] transition-shadow duration-300 px-6 py-5 rounded-lg bg-gray-700 space-y-3 relative group/cover">
            <div className="cover px-6 py-5 rounded-lg bg-gradient-to-r from-indigo-400 to-cyan-400  space-y-3 absolute top-0 left-0 h-full w-full group-hover/cover:hidden hidden sm:flex justify-center items-center flex-col">
              <p className="leave__query__header text-gray-500 text-lg sm:text-xl md:text-3xl font-bold break-words mb-3">
                A Leave Query
              </p>
              <svg aria-hidden="true" className=" transition-all duration-300 w-8 h-8 ml-2 -mr-1" color='grey' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM123.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L281 232.7l-15.3-36.8C248.5 154.8 208.3 128 163.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1L68.7 398 9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L116.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM550.6 153.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L530.7 224H384c-17.7 0-32 14.3-32 32s14.3 32 32 32H530.7l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3l-80-80z" />
              </svg>
            </div>
            <p className="leave__query__header text-gray-200 text-lg sm:text-xl md:text-3xl font-bold break-words mb-3">
              A Leave Query
            </p>
            <div className='from__date'>
              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">From...</label>
              <input type="date" id="small-input" className="block w-full p-2 text-gray-400 border border-gray-300 rounded-lg bg-gray-700 sm:text-xs " />
            </div>
            <div className='to__date'>
              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To...</label>
              <input type="date" id="small-input" className="block w-full p-2 text-gray-400 border border-gray-300 rounded-lg bg-gray-700 sm:text-xs " />
            </div>
            <div className='leave__note'>
              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason</label>
              <input type="text" id="small-input" className="block w-full p-2 text-gray-400 border border-gray-300 rounded-lg bg-gray-700 sm:text-xs " />
            </div>
            <button type="button" className="group mt-3 text-white bg-[#10bcf6] hover:bg-[#05baf7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
              Submit
              <svg aria-hidden="true" className="w-0 transition-all duration-300 group-hover:w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className="chicken__list border border-gray-600 hover:shadow-[8px_5px_28px_#272e3a,-5px_5px_20px_#475468] transition-shadow duration-300 px-6 py-5 rounded-lg bg-gray-700 space-y-3 relative group/cover">
            <div className="cover px-6 py-5 rounded-lg bg-gradient-to-r from-violet-200 to-pink-200 space-y-3 absolute top-0 left-0 h-full w-full  group-hover/cover:hidden hidden sm:flex justify-center items-center flex-col">
              <p className="leave__query__header text-gray-500 text-lg sm:text-xl md:text-3xl font-bold break-words mb-3">
                Want to eat chicken?
              </p>
              <svg aria-hidden="true" className=" transition-all duration-300 w-8 h-8 ml-2 -mr-1" color='grey' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M160 265.2c0 8.5-3.4 16.6-9.4 22.6l-26.8 26.8c-12.3 12.3-32.5 11.4-49.4 7.2C69.8 320.6 65 320 60 320c-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5c-4.2-16.9-5.2-37.1 7.2-49.4l26.8-26.8c6-6 14.1-9.4 22.6-9.4H336c6.3 0 12.4-.3 18.5-1c11.9-1.2 16.4-15.5 10.8-26c-8.5-15.8-13.3-33.8-13.3-53c0-61.9 50.1-112 112-112c8 0 15.7 .8 23.2 2.4c11.7 2.5 24.1-5.9 22-17.6C494.5 62.5 422.5 0 336 0C238.8 0 160 78.8 160 176v89.2z" />
              </svg>
            </div>
            <p className="chicken__header text-gray-200 text-lg sm:text-xl md:text-3xl font-bold break-words ">
              Want to eat chicken?
            </p>
            <div className='yes__button flex justify-center !mt-16'>
              <button type="button" className="group mt-3 text-white bg-[#10f683] hover:bg-[#00ff80] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                Yes
                <svg aria-hidden="true" className="w-0 transition-all duration-300 group-hover:w-5 h-5 ml-2 -mr-1" fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
              </button>
            </div>
            <div className='no__button flex justify-center '>
              <button type="button" className="group mt-3 text-white bg-[#f64610] hover:bg-[#f63900] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
                No
                <svg aria-hidden="true" className="w-0 transition-all duration-300 group-hover:w-5 h-5 ml-2 -mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                </svg>
              </button>
            </div>

          </div>
          <div className="complaint__box border border-gray-600 hover:shadow-[8px_5px_28px_#272e3a,-5px_5px_20px_#475468] transition-shadow duration-300 px-6 py-5 rounded-lg bg-gray-700 space-y-3 relative group/cover">
            <div className="cover px-6 py-5 rounded-lg bg-gradient-to-r from-teal-400 to-yellow-200 space-y-3 absolute top-0 left-0 h-full w-full  group-hover/cover:hidden hidden sm:flex justify-center items-center flex-col">
              <p className="leave__query__header text-gray-500 text-lg sm:text-xl md:text-3xl font-bold break-words mb-3">
                File a Complaint!
              </p>
              <svg aria-hidden="true" className=" transition-all duration-300 w-8 h-8 ml-2 -mr-1" color='grey' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M160 265.2c0 8.5-3.4 16.6-9.4 22.6l-26.8 26.8c-12.3 12.3-32.5 11.4-49.4 7.2C69.8 320.6 65 320 60 320c-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5c-4.2-16.9-5.2-37.1 7.2-49.4l26.8-26.8c6-6 14.1-9.4 22.6-9.4H336c6.3 0 12.4-.3 18.5-1c11.9-1.2 16.4-15.5 10.8-26c-8.5-15.8-13.3-33.8-13.3-53c0-61.9 50.1-112 112-112c8 0 15.7 .8 23.2 2.4c11.7 2.5 24.1-5.9 22-17.6C494.5 62.5 422.5 0 336 0C238.8 0 160 78.8 160 176v89.2z" />
              </svg>
            </div>
            <p className="leave__query__header text-gray-200 text-lg sm:text-xl md:text-3xl font-bold break-words mb-3">
              File a Complaint!
            </p>
            <div className='complaint__title'>
              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
              <input type="text" id="small-input" className="block w-full p-2 text-gray-400 border border-gray-300 rounded-lg bg-gray-700 sm:text-xs " />
            </div>
            <div className='complaint__details'>
              <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detail explaination</label>
              {/* <input type="date" id="small-input"  /> */}
              <textarea cols="30" rows="6" className="block w-full p-2 text-gray-400 border border-gray-300 rounded-lg bg-gray-700 sm:text-xs " placeholder='Your Issue here...'></textarea>
            </div>
            <button type="button" className="group mt-3 text-white bg-[#10bcf6] hover:bg-[#05baf7] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
              Submit
              <svg aria-hidden="true" className="w-0 transition-all duration-300 group-hover:w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index