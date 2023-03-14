"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const index = ({ setShowAdmissionModal }) => {

    let newAdmission = [
        {
            imgUrl: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
            name: "Neil Sims",
            email: "email@windster.com",
            transactionId: "0206cs191001",
            rollNo: "0206cs191001",
        },
        {
            imgUrl: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
            name: "Neil Sims",
            email: "email@windster.com",
            transactionId: "0206cs191001",
            rollNo: "0206cs191001",
        },
        {
            imgUrl: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
            name: "Neil Sims",
            email: "email@windster.com",
            transactionId: "0206cs191001",
            rollNo: "0206cs191001",
        },
        {
            imgUrl: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
            name: "Neil Sims",
            email: "email@windster.com",
            transactionId: "0206cs191001",
            rollNo: "0206cs191001",
        },
        {
            imgUrl: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
            name: "Neil Sims",
            email: "email@windster.com",
            transactionId: "0206cs191001",
            rollNo: "0206cs191001",
        },
        {
            imgUrl: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
            name: "Neil Sims",
            email: "email@windster.com",
            transactionId: "0206cs191001",
            rollNo: "0206cs191001",
        },
    ];

    return (
        <div className="fixed inset-0 z-10 backdrop-blur-sm transition-opacity duration-300">
            <div
                className="fixed inset-0 z-5 w-full h-full opacity-80"
                onClick={() => setShowAdmissionModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="w-full max-w-6xl h-[90vh] overflow-y-scroll scrollbar px-4 mx-auto bg-gray-800 rounded-md shadow-lg border border-gray-600">
                    <div className="my-3 relative">
                        <div className="heading__text bg-gray-800  sticky top-0 flex items-center gap-5 justify-center border-b border-gray-200 dark:border-gray-700 py-3 ">
                            <h4 className="text-xl font-medium text-gray-300">
                                New Applications
                            </h4>
                            <div className="flex items-center justify-center flex-none w-12 h-12 bg-red-100 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                            {/* list */}
                            <div className="max-w-2xl mx-auto">
                                <div className="p-4 bg-white rounded-lg border-0 shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Applicants</h3>
                                        <Link href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                            View all
                                        </Link>
                                    </div>
                                    <div className="flow-root">
                                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                            {newAdmission.map((item, index) => {
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
                                                                    {item.email}
                                                                </p>
                                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                    Transaction Id ● {item.transactionId}
                                                                </p>
                                                            </div>
                                                            <div className="inline-flex items-center text-base font-semibold text-green-400 hover:text-green-500 cursor-pointer">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                                                </svg>
                                                            </div>
                                                            <div className="inline-flex items-center text-base font-semibold text-red-400 hover:text-red-500 cursor-pointer">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 512 512">
                                                                    <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" /></svg>
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
        </div>
    )
}

export default index