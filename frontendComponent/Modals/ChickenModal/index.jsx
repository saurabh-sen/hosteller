"use client"
import Image from 'next/image'
import React from 'react'

const index = ({ setShowChickenModal }) => {

  let newChicken = [
    {
      imgUrl: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
      name: "Neil Sims",
      rollNo: "BSCS-19-001",
      pieces: "2",
      price: "200",
    },
    {
      imgUrl: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
      name: "Neil Sims",
      rollNo: "BSCS-19-001",
      pieces: "2",
      price: "200",
    },
    {
      imgUrl: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
      name: "Neil Sims",
      rollNo: "BSCS-19-001",
      pieces: "2",
      price: "200",
    },
    {
      imgUrl: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
      name: "Neil Sims",
      rollNo: "BSCS-19-001",
      pieces: "2",
      price: "200",
    },
    {
      imgUrl: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
      name: "Neil Sims",
      rollNo: "BSCS-19-001",
      pieces: "2",
      price: "200",
    },
  ];

  return (
    <div className="fixed inset-0 z-10 backdrop-blur-sm transition-opacity duration-300">
      <div
        className="fixed inset-0 z-5 w-full h-full opacity-80"
        onClick={() => setShowChickenModal(false)}
      ></div>
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="w-full max-w-6xl h-[90vh] overflow-y-scroll scrollbar px-4 mx-auto bg-gray-800 rounded-md shadow-lg border border-gray-600">
          <div className="my-3 relative">
            <div className="heading__text bg-gray-800  sticky top-0 flex items-center gap-5 justify-center border-b border-gray-200 dark:border-gray-700 py-3 ">
              <h4 className="text-xl font-medium text-gray-300">
                Chicken Order List
              </h4>
              <div className="flex items-center justify-center flex-none w-12 h-12 bg-red-100 rounded-full">
                <svg width={25} height={25} className="w-6 h-6 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M160 265.2c0 8.5-3.4 16.6-9.4 22.6l-26.8 26.8c-12.3 12.3-32.5 11.4-49.4 7.2C69.8 320.6 65 320 60 320c-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5c-4.2-16.9-5.2-37.1 7.2-49.4l26.8-26.8c6-6 14.1-9.4 22.6-9.4H336c6.3 0 12.4-.3 18.5-1c11.9-1.2 16.4-15.5 10.8-26c-8.5-15.8-13.3-33.8-13.3-53c0-61.9 50.1-112 112-112c8 0 15.7 .8 23.2 2.4c11.7 2.5 24.1-5.9 22-17.6C494.5 62.5 422.5 0 336 0C238.8 0 160 78.8 160 176v89.2z" /></svg>
              </div>
            </div>
            <div className="mt-2 text-center sm:ml-4 sm:text-left">
              {/* list */}
              <div className="max-w-2xl mx-auto">
                <div className="p-4 bg-white rounded-lg border-0 shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Orders</h3>
                    {/* <Link href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            View all
                                        </Link> */}
                  </div>
                  <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                      {newChicken.map((item, index) => {
                        return (
                          <li key={index} className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <Image width={32} height={32} className="w-8 md:w-16 h-8 md:h-16 rounded-full" src={item.imgUrl} alt="Neil image" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                  {item.name} ● {item.rollNo}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                  {item.pieces} Pieces
                                </p>
                              </div>
                              <div className="inline-flex items-center text-base font-semibold text-green-400 hover:text-green-500 cursor-pointer">
                                {item.price * item.pieces} Rs
                              </div>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default index