import React from 'react'

const index = () => {
  const events = 1;
  return (    
    <div className='events__sections bg-gray-700'>
      <div className="section__container md:space-x-8 px-5 py-16 mx-auto max-w-6xl">
        <h1 className='sm:text-3xl md:text-4xl text-2xl my-12 mx-4 text-white font-semibold'>Events</h1>
        <div className="events__container text-gray-400 student__ease__containers flex justify-evenly flex-wrap space-y-4 md:space-y-0">
          {
            events ?
            <>
            {/* kapil will code here */}
              <div className="event border border-gray-600 px-4 py-4 rounded-lg bg-gray-600 cursor-pointer"> event1</div>
              <div className="event border border-gray-600 px-4 py-4 rounded-lg bg-gray-600 cursor-pointer"> event1</div>
              <div className="event border border-gray-600 px-4 py-4 rounded-lg bg-gray-600 cursor-pointer"> event1</div>
            </>
            :
            <p>No Events Now...</p>
          }
        </div>
      </div>
    </div>
  )
}

export default index