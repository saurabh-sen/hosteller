import React from "react";
import Image from "next/image";
const index = () => {
  return (
    // kapil will add the code here
    <section class="text-gray-600 body-font bg-[#0e1218]">
      <div class="container px-5 py-16 mx-auto">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white text-center w-full ">
          Student overview
        </h1>
        <div className="flex flex-wrap justify-center">
          <div class=" md:w-52 sm:w-[26rem] w-[21rem] flex flex-col justify-center items-center  p-4 rounded-lg bg-[#1b1f24] ">
            <Image
              alt="team"
              height={3}
              width={3}
              class="w-20 mb-3 h-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full "
              src="https://dummyimage.com/80x80"
            />
            <div class="">
              <h2 class="text-gray-200 title-font font-medium">Brooklyn</h2>
              <p class="text-gray-400">2 year</p>
              <span>room no:455 </span>
            </div>
          </div>
          <div className="flex flex-col">
            <div class="flex w-[21rem] sm:w-[26rem] h-[7rem] ">
              <div class=" flex items-center border-r-2 border-b-2 p-4 rounded-lg sm:w-52 w-[10.5rem] bg-[#1b1f24] ">
                <Image
                  alt="team"
                  height={3}
                  width={3}
                  class="sm:w-16 sm:h-16 w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-200 title-font font-medium">
                    Student ID
                  </h2>
                  {/* <p class="text-gray-400">UI</p> */}
                </div>
              </div>

              <div class=" flex items-center border-l-2 border-b-2 p-4 rounded-lg sm:w-52 w-[10.5rem] bg-[#1b1f24]">
                <Image
                  alt="team"
                  height={3}
                  width={3}
                  class="sm:w-16 sm:h-16 w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-200 title-font font-medium">
                    complaints
                  </h2>
                  {/* <p class="text-gray-400">UI</p> */}
                </div>
              </div>
            </div>
            <div class="flex w-[21rem] sm:w-[26rem] h-[7rem]">
              <div class=" flex items-center border-r-2 border-t-2 p-4 rounded-lg sm:w-52 w-[10.5rem] bg-[#1b1f24] ">
                <Image
                  alt="team"
                  height={3}
                  width={3}
                  class="sm:w-16 sm:h-16 w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-200 title-font font-medium">
                    No. of leaves
                  </h2>
                  <p class="text-gray-400">5</p>
                </div>
              </div>

              <div class=" flex items-center border-l-2 border-t-2 p-4 rounded-lg sm:w-52 w-[10.5rem] bg-[#1b1f24]">
                <Image
                  alt="team"
                  height={3}
                  width={3}
                  class="sm:w-16 sm:h-16 w-10 h-10 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-200 title-font font-medium">
                    Ordered chicken
                  </h2>
                  <p class="text-gray-400">2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
