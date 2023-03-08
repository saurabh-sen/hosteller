import React from "react";
import NavBar from "@/frontendComponent/Navbar";
import Image from "next/image";
import Footer from "@/frontendComponent/Footer";

const App = () => {
    return (
        <div>
            <NavBar />
            <section className="text-gray-400 border-b border-gray-600 bg-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2  w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex center justify-center"
                        style={{
                            boxShadow: " 11px 11px 22px #171b22,-11px -11px 22px #576780"
                        }}  >
                        <Image alt="feature" width={100} height={100} className="object-cover object-center h-full w-full" src="https://dummyimage.com/720x600"
                        />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-5"
                                style={{
                                    boxShadow: "11px 11px 28px #272e3a,-11px -11px 28px #475468"
                                }}>
                                <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                    <path fill='#10bcf6' d="M302.2 5.4c10.7-7.2 24.8-7.2 35.5 0L473.7 96H592c26.5 0 48 21.5 48 48V272c0-61.9-50.1-112-112-112s-112 50.1-112 112v24.6c-19.1 11.1-32 31.7-32 55.4H320.3l-.3 0c-35.3 0-64 28.7-64 64v96h64v0H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48H166.3L302.2 5.4zM80 208v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zm0 128v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zm240-72a88 88 0 1 0 0-176 88 88 0 1 0 0 176zm16-120v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H320c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16zm192 96c-17.7 0-32 14.3-32 32v48h64V272c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80v48c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32V272z" /></svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-white text-lg title-font font-medium mb-3">Security</h2>
                                <p className="leading-relaxed text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Vel turpis nunc eget lorem dolor sed viverra. Nisl rhoncus mattis rhoncus urna neque viverra. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Tincidunt ornare massa eget egestas purus viverra accumsan in. Non consectetur a erat nam at lectus urna duis. Auctor eu augue ut lectus arcu bibendum at. Sed turpis tincidunt id aliquet risus feugiat. Blandit libero volutpat sed cras. Justo nec ultrices dui sapien eget mi. Pretium nibh ipsum consequat nisl vel. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Purus in massa tempor nec feugiat nisl pretium fusce. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Pellentesque sit amet porttitor eget dolor morbi non arcu risus.</p>

                                <p>           Nisi vitae suscipit tellus mauris. Vitae congue eu consequat ac felis donec. Elementum facilisis leo vel fringilla est ullamcorper eget. Sapien faucibus et molestie ac. Mi ipsum faucibus vitae aliquet. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Magna etiam tempor orci eu lobortis. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Sit amet mattis vulputate enim nulla. Non blandit massa enim nec dui nunc. Sed felis eget velit aliquet sagittis. Id neque aliquam vestibulum morbi. Semper quis lectus nulla at. Molestie at elementum eu facilisis sed odio.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default App;