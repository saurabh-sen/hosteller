import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex justify-center flex-wrap md:text-left text-center -mb-10 -mx-4">
          <div className="lg:w-1/6 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Navigation</h2>
            <nav className="list-none mb-10">
              <li>
                <Link scroll href='#landing' className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link scroll href='#gallery' className="text-gray-400 hover:text-white">Gallery</Link>
              </li>
              <li>
                <Link href='/features' className="text-gray-400 hover:text-white">Services</Link>
              </li>
              <li>
                <Link href='/contact' className="text-gray-400 hover:text-white">Contact</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4 text-center">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Navigation</h2>
            <nav className="list-none mb-10">
              <li>
                <Link scroll href='#landing' className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link scroll href='#gallery' className="text-gray-400 hover:text-white">Gallery</Link>
              </li>
              <li>
                <Link href='/features' className="text-gray-400 hover:text-white">Services</Link>
              </li>
              <li>
                <Link href='/contact' className="text-gray-400 hover:text-white">Contact</Link>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">© 2020 Pixel Perfect Devs —
            <Link href="https://github.com/saurabh-sen/hosteller" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@PixelPerfectDevs</Link>
          </p>
          <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">Far From Home, Another Home</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer