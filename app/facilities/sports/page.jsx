import React from "react";
import NavBar from "@/frontendComponent/Navbar";
import Image from "next/image";
import Footer from "@/frontendComponent/Footer";

const Page = () => {
    return (
        <div>
            <NavBar />
            <section className="border-b border-gray-600 text-gray-400 bg-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2  w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex center justify-center"
                        style={{
                            boxShadow: " 11px 11px 22px #171b22,-11px -11px 22px #576780"
                        }}  >

                        <Image width={100} height={100} alt="feature" className="object-cover object-center h-full w-full" src="https://thumbs.dreamstime.com/b/soccer-team-practicing-football-ground-teenagers-playing-field-182546504.jpg"
                        />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-5 hover:shadow-[11px_11px_28px_#272e3a,-11px_-11px_28px_#475468] border border-gray-600 transition-shadow duration-300" >
                                <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill='#fbbb1c' d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z" /></svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium mb-3">Sports</h2>
                                <p className="leading-relaxed text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Vel turpis nunc eget lorem dolor sed viverra. Nisl rhoncus mattis rhoncus urna neque viverra. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Tincidunt ornare massa eget egestas purus viverra accumsan in. Non consectetur a erat nam at lectus urna duis. Auctor eu augue ut lectus arcu bibendum at. Sed turpis tincidunt id aliquet risus feugiat. Blandit libero volutpat sed cras. Justo nec ultrices dui sapien eget mi. Pretium nibh ipsum consequat nisl vel. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Purus in massa tempor nec feugiat nisl pretium fusce. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Pellentesque sit amet porttitor eget dolor morbi non arcu risus.</p>

                                <p>           Nisi vitae suscipit tellus mauris. Vitae congue eu consequat ac felis donec. Elementum facilisis leo vel fringilla est ullamcorper eget. Sapien faucibus et molestie ac. Mi ipsum faucibus vitae aliquet. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Magna etiam tempor orci eu lobortis. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Sit amet mattis vulputate enim nulla. Non blandit massa enim nec dui nunc. Sed felis eget velit aliquet sagittis. Id neque aliquam vestibulum morbi. Semper quis lectus nulla at. Molestie at elementum eu facilisis sed odio.
                                </p>

                            </div>
                        </div>




                    </div>
                </div>
            </section>
            <Footer footerbg1="gray-800" footerbg2="gray-700" />
        </div>
    )
}

export default Page;