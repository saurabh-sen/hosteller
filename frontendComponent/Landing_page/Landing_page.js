
import Button from '../Button/Button'

import Image from 'next/image'
const Landing_page = () => {
    return (
        <section className="bg-gray-700 text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">

                    <Image className="object-cover object-center rounded"
                        style=
                        {
                            {
                                color: "red",
                                backGround: "#4b5563",
                                borderRadius: "50px", boxShadow: "20px 20px 60px #2e343c,-20px -20px 60px #68768a",
                                padding: "30px"
                            }
                        } alt="hero" src="/landing_page.jpg" width={600} height={720} />

                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                        {/* <br className="hidden lg:inline-block">readymade gluten/> */}

                    </h1>
                    <p className="mb-8 leading-relaxed text-stone-300">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                
                        <Button/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing_page