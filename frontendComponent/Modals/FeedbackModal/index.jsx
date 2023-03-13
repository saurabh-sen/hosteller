"use client"
import React, { useState } from 'react'

const Index = ({ setShowFeedbackModal }) => {

    const [openViewAndReply, setOpenViewAndReply] = useState(false);

    let newFeedbacks = [
        {
            title: "Pani nhi aara hai",
            date: "10/09/2021",
            studentName: "Vishal Singh",
            desc: "4 din se pani nhi aara hai, please fix it as soon as possible, it's very urgent",
        },
        {
            title: "Pani nhi aara hai",
            date: "10/09/2021",
            studentName: "Vishal Singh",
            desc: "4 din se pani nhi aara hai, please fix it as soon as possible, it's very urgent",
        },
        {
            title: "Pani nhi aara hai",
            date: "10/09/2021",
            studentName: "Vishal Singh",
            desc: "4 din se pani nhi aara hai, please fix it as soon as possible, it's very urgent",
        },
        {
            title: "Pani nhi aara hai",
            date: "10/09/2021",
            studentName: "Vishal Singh",
            desc: "4 din se pani nhi aara hai, please fix it as soon as possible, it's very urgent",
        },
        {
            title: "Pani nhi aara hai",
            date: "10/09/2021",
            studentName: "Vishal Singh",
            desc: "4 din se pani nhi aara hai, please fix it as soon as possible, it's very urgent",
        },
        {
            title: "Pani nhi aara hai",
            date: "10/09/2021",
            studentName: "Vishal Singh",
            desc: "4 din se pani nhi aara hai, please fix it as soon as possible, it's very urgent",
        },
        {
            title: "Pani nhi aara hai",
            date: "10/09/2021",
            studentName: "Vishal Singh",
            desc: "4 din se pani nhi aara hai, please fix it as soon as possible, it's very urgent",
        },
    ];

    return (
        <div className="fixed inset-0 z-10 backdrop-blur-sm transition-opacity duration-300">
            <div
                className="fixed inset-0 z-5 w-full h-full opacity-80"
                onClick={() => setShowFeedbackModal(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
                <div className="w-full max-w-6xl h-[90vh] overflow-y-scroll scrollbar px-4 mx-auto bg-gray-800 rounded-md shadow-lg border border-gray-600">
                    <div className="my-3 relative">
                        <div className="heading__text bg-gray-800  sticky top-0 flex items-center gap-5 justify-center border-b border-gray-200 dark:border-gray-700 py-3 ">
                            <h4 className="text-xl font-medium text-gray-300">
                                View Feedback/Complains
                            </h4>
                            <div className="flex items-center justify-center flex-none w-12 h-12 bg-red-100 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                            {/* list */}
                            <div className="max-w-2xl mx-auto">
                                <div className="p-4 bg-white rounded-lg border-0 shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Feedbacks</h3>
                                    </div>
                                    <div className="flow-root">
                                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                            {newFeedbacks.map((item, index) => {
                                                return (
                                                    <li key={index} className="py-3 sm:py-4">
                                                        <div className="flex items-center space-x-4">
                                                            <p className="flex-shrink-0 text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                {index + 1}.
                                                            </p>
                                                            <p className="flex-shrink-0 text-lg font-medium text-gray-900 truncate dark:text-white">
                                                                {item.title}
                                                            </p>
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                                    On {item.date} ● By {item.studentName}
                                                                </p>
                                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                                    Description - {item.desc}
                                                                </p>
                                                            </div>
                                                            <div className="inline-flex items-center text-base font-semibold text-purple-600 hover:text-purple-600 cursor-pointer " onClick={() => setOpenViewAndReply(prev => !prev)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                                                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
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
            {openViewAndReply ?
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
                                            Reply to Feedback
                                        </h3>
                                        <div className="mt-2">
                                            <form className="w-full max-w-lg">
                                                <div className="flex flex-wrap -mx-3 my-4">
                                                    <div className="w-full px-3">
                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                            Description of Concern
                                                        </label>
                                                        <p className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                                                            From Vishal Singh ● 18/04/2023 ● B.Tech ● 3rd Year, <br /><br />
                                                            4 din se pani nhi aara hai, please fix it as soon as possible, its very urgent
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap -mx-3 my-4">
                                                    <div className="w-full px-3">
                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                            Your Name
                                                        </label>
                                                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap -mx-3 mb-4">
                                                    <div className="w-full px-3">
                                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="reply_to_concern">
                                                            Your Reply to concern
                                                        </label>
                                                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="reply_to_concern" id="reply_to_concern" cols="30" rows="5" placeholder="We will look after it..."></textarea>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm " onClick={() => setOpenViewAndReply(false)}>
                                    Send
                                </button>
                                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setOpenViewAndReply(false)}>
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