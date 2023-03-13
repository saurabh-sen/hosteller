import React from "react";
import NavBar from "@/frontendComponent/Navbar";
import Image from "next/image";
import Footer from "@/frontendComponent/Footer";

const Page = () => {
    return (
        <div>
            <NavBar />
            <section className="text-gray-400 border-b border-gray-600 bg-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2  w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex center justify-center"
                        style={{
                            boxShadow: " 11px 11px 22px #171b22,-11px -11px 22px #576780"
                        }}  >
                        <Image width="100" height="100" alt="feature" className="object-cover object-center h-full w-full" src="https://dummyimage.com/720x600"
                        />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-red-400 mb-5"
                                style={{
                                    background: "#374151",
                                    boxShadow: "11px 11px 28px #272e3a,-11px -11px 28px #475468"
                                }}>
                                <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path fill='#ffa7a7' d="M218.3 8.5c12.3-11.3 31.2-11.3 43.4 0l208 192c6.7 6.2 10.3 14.8 10.3 23.5H336c-19.1 0-36.3 8.4-48 21.7V208c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64V416H112c-26.5 0-48-21.5-48-48V256H32c-13.2 0-25-8.1-29.8-20.3s-1.6-26.2 8.1-35.2l208-192zM352 304V448H544V304H352zm-48-16c0-17.7 14.3-32 32-32H560c17.7 0 32 14.3 32 32V448h32c8.8 0 16 7.2 16 16c0 26.5-21.5 48-48 48H544 352 304c-26.5 0-48-21.5-48-48c0-8.8 7.2-16 16-16h32V288z" /></svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium mb-3">Home Like Environment</h2>
                                <p className="leading-relaxed text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Vel turpis nunc eget lorem dolor sed viverra. Nisl rhoncus mattis rhoncus urna neque viverra. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Tincidunt ornare massa eget egestas purus viverra accumsan in. Non consectetur a erat nam at lectus urna duis. Auctor eu augue ut lectus arcu bibendum at. Sed turpis tincidunt id aliquet risus feugiat. Blandit libero volutpat sed cras. Justo nec ultrices dui sapien eget mi. Pretium nibh ipsum consequat nisl vel. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Purus in massa tempor nec feugiat nisl pretium fusce. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Pellentesque sit amet porttitor eget dolor morbi non arcu risus.</p>

                                <p>Nisi vitae suscipit tellus mauris. Vitae congue eu consequat ac felis donec. Elementum facilisis leo vel fringilla est ullamcorper eget. Sapien faucibus et molestie ac. Mi ipsum faucibus vitae aliquet. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Magna etiam tempor orci eu lobortis. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Sit amet mattis vulputate enim nulla. Non blandit massa enim nec dui nunc. Sed felis eget velit aliquet sagittis. Id neque aliquam vestibulum morbi. Semper quis lectus nulla at. Molestie at elementum eu facilisis sed odio.
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