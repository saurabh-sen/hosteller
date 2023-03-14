import Image from "next/image";

const index = () => {
  const events = 1;
  return (
    <div className="events__sections bg-gray-700">
      <div className="section__container md:space-x-8 px-5 py-16 mx-auto max-w-6xl">
        <h1 className="sm:text-3xl md:text-4xl text-center text-2xl my-12 mx-4 text-white font-semibold">
          Events
        </h1>
        <div className="events__container text-gray-400 student__ease__containers flex justify-evenly flex-wrap ">
          {events ? (
            <>
              {/* kapil will code here */}
              <div className=" bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 ... hover:text-white m-3 event border-2 h-[20rem] border-gray-700 p-6 w-80  rounded-lg bg-[#161616] cursor-pointer ">
                <div className="flex  justify-between">
                  <div className="font-thin text-[1.4rem]">23 Apr 2021</div>
                  <Image
                    alt="team"
                    height={60}
                    width={60}
                    className="bg-gray-100 object-cover mx-5 rounded-full "
                    src="https://dummyimage.com/80x80"
                  />
                </div>

                <div className=" text-red-50 text-[2rem] font-semibold my-8">
                  Bhangra event
                </div>
                <div className="font-thin text-[1.4rem]">
                  venue: cv hall, room no:21
                </div>
              </div>

              <div className=" bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 ... hover:text-white m-3 event border-2 h-[20rem] border-gray-700 p-6 w-80  rounded-lg bg-[#161616] cursor-pointer ">
                <div className="flex  justify-between">
                  <div className="font-thin text-[1.4rem]">23 Apr 2021</div>
                  <Image
                    alt="team"
                    height={60}
                    width={60}
                    className="bg-gray-100 object-cover mx-5 rounded-full "
                    src="https://dummyimage.com/80x80"
                  />
                </div>

                <div className=" text-red-50 text-[2rem] font-semibold my-8">
                  Bhangra event
                </div>
                <div className="font-thin text-[1.4rem]">
                  venue: cv hall, room no:21
                </div>
              </div>

              <div className=" bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 ... hover:text-white m-3 event border-2 h-[20rem] border-gray-700 p-6 w-80  rounded-lg bg-[#161616] cursor-pointer ">
                <div className="flex  justify-between">
                  <div className="font-thin text-[1.4rem]">23 Apr 2021</div>
                  <Image
                    alt="team"
                    height={60}
                    width={60}
                    className="bg-gray-100 object-cover mx-5 rounded-full "
                    src="https://dummyimage.com/80x80"
                  />
                </div>

                <div className=" text-red-50 text-[2rem] font-semibold my-8">
                  Bhangra event
                </div>
                <div className="font-thin text-[1.4rem]">
                  venue: cv hall, room no:21
                </div>
              </div>
            </>
          ) : (
            <p>No Events Now...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
