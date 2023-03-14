import React from 'react'

const Page = () => {
    return (
        <section className="text-gray-400 bg-gray-900 body-font relative min-h-screen">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?q=navi%20mumbai&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{filter: "grayscale(1) contrast(1.2) opacity(0.16)"}}></iframe>
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                            <a className="text-red-400 leading-relaxed">example@email.com</a>
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                            <p className="leading-relaxed">123-456-7890</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
                    <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    <div className="relative mb-4">
                        <label for="name" className="leading-7 text-sm text-gray-400">Name</label>
                        <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
                        <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" data-tempmail="0" />
                    </div>
                    <div className="relative mb-4">
                        <label for="message" className="leading-7 text-sm text-gray-400">Message</label>
                        <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                    </div>
                    <button className="hover:text-[#e8e8e8] px-6 py-4 rounded-2xl text-gray-400 z-10 bg-gray-700 relative font-bold text-base transition-all duration-300 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:rounded-2xl before:bg-gray-600 before:bg-opacity-20 before:-z-10 before:transition-all before:duration-300 before:hover:w-full " 
                    style={{ boxShadow: "inset 5px 5px 10px #10161e, inset -5px -5px 10px #2e3e52" }}
                    >
                        Send
                    </button>
                    <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
            </div>
        </section>
    )
}

export default Page