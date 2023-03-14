"use client"
import React, { useState } from 'react'

const Index = ({ setShowEventsModal }) => {

    const [openAddNewEvents, setOpenAddNewEvents] = useState(false);

    let newEvents = [
        {
            name: "Ganesh Chaturthi",
            date: "10/09/2021",
            venue: "College Ground",
        },
        {
            name: "Ganesh Chaturthi",
            date: "10/09/2021",
            venue: "College Ground",
        },
        {
            name: "Ganesh Chaturthi",
            date: "10/09/2021",
            venue: "College Ground",
        },
        {
            name: "Ganesh Chaturthi",
            date: "10/09/2021",
            venue: "College Ground",
        },
        {
            name: "Ganesh Chaturthi",
            date: "10/09/2021",
            venue: "College Ground",
        },
    ];

    return (
        <div className="fixed inset-0 z-10 backdrop-blur-sm transition-opacity duration-300">
            <div
                className="fixed inset-0 z-5 w-full h-full opacity-80"
                onClick={() => setShowEventsModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="w-full max-w-6xl h-[90vh] overflow-y-scroll scrollbar px-4 mx-auto bg-gray-800 rounded-md shadow-lg border border-gray-600">
                    <div className="my-3 relative">
                        <div className="heading__text bg-gray-800  sticky top-0 flex items-center gap-5 justify-center border-b border-gray-200 dark:border-gray-700 py-3 ">
                            <h4 className="text-xl font-medium text-gray-300">
                                Post Events/News
                            </h4>
                            <div className="flex items-center justify-center flex-none w-12 h-12 bg-red-100 rounded-full">
                                <svg aria-hidden="true" className="w-6 h-6 text-red-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                            {/* list */}
                            <div className="max-w-2xl mx-auto">
                                <div className="p-4 bg-white rounded-lg border-0 shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Events</h3>
                                        <p onClick={() => setOpenAddNewEvents(prev => !prev)} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">
                                            Add New
                                        </p>
                                    </div>
                                    <div className="flow-root">
                                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                            {newEvents.map((item, index) => {
                                                return (
                                                    <li key={index} className="py-3 sm:py-4">
                                                        <div className="flex items-center space-x-4">
                                                            <p className="flex-shrink-0 text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                {index + 1}.
                                                            </p>
                                                            <p className="flex-shrink-0 text-lg font-medium text-gray-900 truncate dark:text-white">
                                                                {item.name}
                                                            </p>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                    On {item.date}
                                                                </p>
                                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                    Venue - {item.venue}
                                                                </p>
                                                            </div>
                                                            <div className="inline-flex items-center text-base font-semibold text-red-400 hover:text-red-500 cursor-pointer">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                                </svg>
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
            {/* Add New Events */}
            {openAddNewEvents ? 
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-center justify-center">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                            Add New Events
                                        </h3>
                                        <div className="mt-2">
                                            <form className="w-full max-w-lg">
                                                <div className="flex flex-wrap -mx-3 my-4">
                                                    <div className="w-full px-3">
                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                            Event Name
                                                        </label>
                                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Event Name" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap -mx-3 mb-4">
                                                    <div className="w-full px-3">
                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                            Event Date
                                                        </label>
                                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" placeholder="Event Date" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap -mx-3 mb-4">
                                                    <div className="w-full px-3">
                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                            Event Venue
                                                        </label>
                                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Event Venue" />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm " onClick={() => setOpenAddNewEvents(false)}>
                                    Save
                                </button>
                                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setOpenAddNewEvents(false)}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            
            : null}
        </div>
    )
}

export default Index