import React from "react";
import NavBar from "@/frontendComponent/Navbar";

const App = () => {
    return (
        <div>
            <NavBar />

            <section class="text-gray-400 bg-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="lg:w-1/2  w-full mb-10 lg:mb-0 rounded-lg overflow-hidden flex center justify-center"
                        style={{
                            background: "#374151",
                            boxShadow: " 11px 11px 22px #171b22,-11px -11px 22px #576780"
                        }}  >

                        <img alt="feature" class="object-cover  object-center h-full w-full" src="https://th.bing.com/th/id/OIP.QR8_woUSGdP5wD1LVn-kFQHaFj?pid=ImgDet&rs=1"
                        />
                    </div>
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div class="flex flex-col mb-10 lg:items-start items-center">
                            <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-red-400 mb-5"
                                style={{
                                    background: "#374151",
                                    boxShadow: "11px 11px 28px #272e3a,-11px -11px 28px #475468"
                                }}>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div class="flex-grow">
                                <h2 class="text-white text-lg title-font font-medium mb-3">Home Like Environment</h2>
                                <p class="leading-relaxed text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Vel turpis nunc eget lorem dolor sed viverra. Nisl rhoncus mattis rhoncus urna neque viverra. Condimentum vitae sapien pellentesque habitant morbi tristique senectus. Tincidunt ornare massa eget egestas purus viverra accumsan in. Non consectetur a erat nam at lectus urna duis. Auctor eu augue ut lectus arcu bibendum at. Sed turpis tincidunt id aliquet risus feugiat. Blandit libero volutpat sed cras. Justo nec ultrices dui sapien eget mi. Pretium nibh ipsum consequat nisl vel. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Purus in massa tempor nec feugiat nisl pretium fusce. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Pellentesque sit amet porttitor eget dolor morbi non arcu risus.</p>

                                <p>           Nisi vitae suscipit tellus mauris. Vitae congue eu consequat ac felis donec. Elementum facilisis leo vel fringilla est ullamcorper eget. Sapien faucibus et molestie ac. Mi ipsum faucibus vitae aliquet. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Magna etiam tempor orci eu lobortis. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Sit amet mattis vulputate enim nulla. Non blandit massa enim nec dui nunc. Sed felis eget velit aliquet sagittis. Id neque aliquam vestibulum morbi. Semper quis lectus nulla at. Molestie at elementum eu facilisis sed odio.
                                </p>

                            </div>
                        </div>




                    </div>
                </div>
            </section>
            GitHub
        </div>
    )
}

export default App;