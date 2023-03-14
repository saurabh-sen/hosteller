import Image from "next/image";

const index = () => {

  let eventList = [
    {
      id: 1,
      title: "Bhangra event",
      date: "23 Apr 2021",
      venue: "cv hall, room no:21",
      image: "https://dummyimage.com/80x80",
    },
    {
      id: 2,
      title: "Bhangra event",
      date: "23 Apr 2021",
      venue: "cv hall, room no:21",
      image: "https://dummyimage.com/80x80",
    },
    {
      id: 3,
      title: "Bhangra event",
      date: "23 Apr 2021",
      venue: "cv hall, room no:21",
      image: "https://dummyimage.com/80x80",
    },
    {
      id: 4,
      title: "Bhangra event",
      date: "23 Apr 2021",
      venue: "cv hall, room no:21",
      image: "https://dummyimage.com/80x80",
    },
    {
      id: 5,
      title: "Bhangra event",
      date: "23 Apr 2021",
      venue: "cv hall, room no:21",
      image: "https://dummyimage.com/80x80",
    },
    {
      id: 6,
      title: "Bhangra event",
      date: "23 Apr 2021",
      venue: "cv hall, room no:21",
      image: "https://dummyimage.com/80x80",
    },
  ];

  return (
    <div className="events__sections bg-gray-700">
      <div className="section__container md:space-x-8 px-5 py-16 mx-auto max-w-6xl">
        <h1 className="sm:text-3xl text-left md:text-4xl text-2xl my-12 mx-4 text-white font-semibold">
          EVENTS
        </h1>
        <div className="events__container text-gray-400 student__ease__containers flex justify-evenly flex-wrap ">
          {eventList ? (
            eventList.map((event) => 
              <div key={event.id} className=" hover:bg-gradient-to-r from-pink-500 to-yellow-500 text-gray-400  hover:text-white m-3 event
              border border-gray-400 p-6 w-72 h-64 rounded-lg bg-gray-800 cursor-pointer ">
                <div className="flex items-center justify-between">
                  <div className="">{event.date}</div>
                  <Image
                    alt="team"
                    height={60}
                    width={60}
                    className="bg-gray-100 object-cover mx-5 rounded-full "
                    src={event.image}
                  />
                </div>

                <div className="text-2xl sm:text-3xl font-semibold my-8">
                  {event.title}
                </div>
                <div className="">
                  Venue: {event.venue}
                </div>
              </div>
            )
          ) : (
            <p>No Events Now...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
