import Image from 'next/image'
import bg from '../../public/landingpage.svg'

const LandingPage = () => {
    return (
        <section id='landing' className="bg-gray-700 text-gray-400 ">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image className="object-cover object-center rounded" alt="hero" src={bg} width={600} height={720}
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-5xl text-2xl mb-4 font-medium text-gray-400">Far From Home
                        <br className="" /> Another Home
                    </h1>
                    <p className="mb-8 leading-relaxed text-base"> In Budget, with high class services. </p>
                    <div className="flex justify-center">
                        <button className="group learn-more relative inline-block cursor-pointer outline-0 border-0 align-middle bg-transparent w-48 h-auto">
                            <span className="circle group-hover:w-full transition-all duration-500 ease-in-out relative block w-12 h-12 bg-[#282936] rounded-full" aria-hidden="true"
                            style={{ boxShadow: "inset 5px 5px 10px #10161e, inset -5px -5px 10px #2e3e52" }}
                            >
                                <span className="icon transition-all duration-500 ease-in-out 
                                arrow left-2 w-6 h-6 bg-none before:absolute before:content-[''] before:top-4 before:right-5 before:w-4 before:h-4 before:border-t-2 before:border-r-2 before:rotate-45 group-hover:bg-gray-400 group-hover:translate-x-4"></span>
                            </span>
                            <span className="button-text transition-all duration-500 ease-in-out absolute top-0 left-0 right-0 bottom-0 py-3 text-[#282936] uppercase group-hover:text-gray-400">Learn More</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage