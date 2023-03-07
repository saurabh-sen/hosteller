import React from "react";
import Image from "next/image";
const index = () => {
  return (
    // kapil will add the code here
    <section className="text-gray-400 bg-gray-700">
      <div className=" flex items-center justify-center flex-wrap md:space-x-8 px-5 py-16 mx-auto">
        <h1 className="sm:text-3xl md:text-4xl text-2xl mb-4 lg:mb-0 text-white font-semibold">
          OVERVIEW
        </h1>
        <div className="flex flex-wrap items-center justify-center bg-gray-600 rounded-lg py-6 px-6 space-y-4">
          <div className="px-10 space-y-2 flex flex-col items-center md:items-start  ">
            <Image alt="team" height={70} width={70} className="bg-gray-100 object-cover rounded-full " src="https://dummyimage.com/80x80" />
            <div className="student__info text-center md:text-left">
              <h2 className="text-gray-200 title-font font-medium">Saurabh Sen</h2>
              <p className="text-gray-400">Student - 2 year</p>
            </div>
            <div className="student__room__info border border-gray-400 rounded-lg flex items-center p-3 px-4 space-x-4">
              <span className="room__info__svg bg-[#71aefe] rounded-full p-3 sm:p-4 md:p-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="white" viewBox="0 0 16 16">
                  <path fill="currentColor" d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708L5.793 1Zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207l-4.5-4.5Z" />
                </svg>
              </span>
              <p className="room__info flex flex-col">
                <span className="info__number text-3xl font-bold text-gray-200">123</span>
                <span className="info__name">Room No.</span>
              </p>
            </div>
          </div>
          <div className="info__cards grid grid-cols-2 gap-2">

              <div className=" flex flex-wrap justify-center items-center border-b border-r border-gray-400 p-4 space-x-3">
                <span className="room__info__svg bg-[#fbbb1c] rounded-full p-3 sm:p-4 md:p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="white" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708L5.793 1Zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207l-4.5-4.5Z" />
                  </svg>
                </span>
                <div className="flex-grow">
                  <p className="text-gray-200 text-lg sm:text-xl md:text-3xl font-bold max-w-[150px] break-words">0206cs</p>
                  <p className="text-gray-400 text-sm md:text-base">
                    Student ID
                  </p>
                </div>
              </div>

              <div className=" flex flex-wrap justify-center items-center border-b border-l border-gray-400 p-4 space-x-3">
                <span className="room__info__svg bg-[#ff8a49] rounded-full p-3 sm:p-4 md:p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="white" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708L5.793 1Zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207l-4.5-4.5Z" />
                  </svg>
                </span>
                <div className="flex-grow">
                  <p className="text-gray-200 text-lg sm:text-xl md:text-3xl font-bold max-w-[150px] break-words">0206cs</p>
                  <p className="text-gray-400 text-sm md:text-base">
                    Student ID
                  </p>
                </div>
              </div>
              <div className=" flex flex-wrap justify-center items-center border-t border-r border-gray-400 p-4 space-x-3">
                <span className="room__info__svg bg-[#ffa7a7] rounded-full p-3 sm:p-4 md:p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="white" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708L5.793 1Zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207l-4.5-4.5Z" />
                  </svg>
                </span>
                <div className="flex-grow">
                  <p className="text-gray-200 text-lg sm:text-xl md:text-3xl font-bold max-w-[150px] break-words">0206cs</p>
                  <p className="text-gray-400 text-sm md:text-base">
                    Student ID
                  </p>
                </div>
              </div>

              <div className=" flex flex-wrap justify-center border-t border-l border-gray-400 items-center p-4 space-x-3">
                <span className="room__info__svg bg-[#10bcf6] rounded-full p-3 sm:p-4 md:p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" color="white" viewBox="0 0 16 16">
                    <path fill="currentColor" d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708L5.793 1Zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207l-4.5-4.5Z" />
                  </svg>
                </span>
                <div className="flex-grow">
                  <p className="text-gray-200 text-lg sm:text-xl md:text-3xl font-bold max-w-[150px] break-words">0206cs</p>
                  <p className="text-gray-400 text-sm md:text-base">
                    Student ID
                  </p>
                </div>
              </div>

          </div>        
        </div>
      </div>
    </section>
  );
};

export default index;