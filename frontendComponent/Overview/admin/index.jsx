import React from "react";
import Image from "next/image";
const index = () => {
  return (
    <section className="text-gray-400 bg-gray-700 ">
      <div className=" flex items-center justify-center flex-wrap md:space-x-8 px-5 py-16 mx-auto max-w-6xl">
        <h1 className="sm:text-3xl md:text-4xl text-2xl mb-4 lg:mb-0 text-white font-semibold">
          OVERVIEW
        </h1>
        <div className="flex flex-wrap items-center justify-center bg-gray-600 rounded-lg py-6 px-6 space-y-4">
          <div className="px-10 space-y-2 flex flex-col items-center md:items-start  ">
            <Image alt="team" height={70} width={70} className="bg-gray-100 object-cover rounded-full " src="https://dummyimage.com/80x80" />
            <div className="student__info text-center md:text-left">
              <h2 className="text-gray-200 title-font font-medium">Admin name</h2>
              <p className="text-gray-400">college- IIT Delhi</p>
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

            <div className=" flex flex-wrap justify-center text-center items-center border-b border-r border-gray-400 p-4 sm:space-x-3">
              <span className="room__info__svg bg-[#fbbb1c] rounded-full p-3 sm:p-4 md:p-6">
                <svg width={25} height={25} color="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M528 160V416c0 8.8-7.2 16-16 16H320c0-44.2-35.8-80-80-80H176c-44.2 0-80 35.8-80 80H64c-8.8 0-16-7.2-16-16V160H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H376z" /></svg>
              </span>
              <div className="flex-grow">
                <p className="text-gray-200 text-lg sm:text-xl md:text-3xl font-bold max-w-[150px] break-words">230</p>
                <p className="text-gray-400 text-sm md:text-base">
                  Registered Students
                </p>
              </div>
            </div>

            <div className=" flex flex-wrap justify-center text-center items-center border-b border-l border-gray-400 p-4 sm:space-x-3">
              <span className="room__info__svg bg-[#ff8a49] rounded-full p-3 sm:p-4 md:p-6">
                <svg width={25} height={25} color="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path fill="currentColor" d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM123.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L281 232.7l-15.3-36.8C248.5 154.8 208.3 128 163.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1L68.7 398 9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L116.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM550.6 153.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L530.7 224H384c-17.7 0-32 14.3-32 32s14.3 32 32 32H530.7l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3l-80-80z" /></svg>
              </span>
              <div className="flex-grow">
                <p className="text-gray-200 text-lg sm:text-xl md:text-3xl font-bold max-w-[150px] break-words">24</p>
                <p className="text-gray-400 text-sm md:text-base">
                  New Applications
                </p>
              </div>
            </div>
            <div className=" flex flex-wrap justify-center text-center items-center border-t border-r border-gray-400 p-4 sm:space-x-3">
              <span className="room__info__svg bg-[#ffa7a7] rounded-full p-3 sm:p-4 md:p-6">
                <svg width={25} height={25} color="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
              </span>
              <div className="flex-grow">
                <p className="text-gray-200 text-lg sm:text-xl md:text-3xl font-bold max-w-[150px] break-words">4</p>
                <p className="text-gray-400 text-sm md:text-base">
                  Complaints Count
                </p>
              </div>
            </div>

            <div className=" flex flex-wrap justify-center text-center border-t border-l border-gray-400 items-center p-4 sm:space-x-3">
              <span className="room__info__svg bg-[#10bcf6] rounded-full p-3 sm:p-4 md:p-6">
                <svg width={25} height={25} color="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                </svg>
              </span>
              <div className="flex-grow">
                <p className="text-gray-200 text-lg sm:text-xl md:text-3xl font-bold max-w-[150px] break-words">3</p>
                <p className="text-gray-400 text-sm md:text-base">
                  Events this month
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