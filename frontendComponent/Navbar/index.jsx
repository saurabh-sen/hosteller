"use client";
import Link from "next/link";

function NavBar() {
  return (
    <header className="text-gray-400 bg-gray-800 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg color="white" xmlns="http://www.w3.org/2000/svg"  className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 640 512">
            <path fill="currentColor" d="M288 48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48V192h40V120c0-13.3 10.7-24 24-24s24 10.7 24 24v72h24c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H432 336c-26.5 0-48-21.5-48-48V48zm64 32v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H368zM352 272v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zm176-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H528zM512 368v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16H528c-8.8 0-16 7.2-16 16zM224 160c0 6-1 11-2 16c20 14 34 38 34 64c0 45-36 80-80 80H160V480c0 18-15 32-32 32c-18 0-32-14-32-32V320H80c-45 0-80-35-80-80c0-26 13-50 33-64c-1-5-1-10-1-16c0-53 42-96 96-96c53 0 96 43 96 96z"/></svg>
          <span className="ml-3 text-xl">Hostellers</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white cursor-pointer hover:drop-shadow-xl shadow-white">Home</a>
          <a className="mr-5 hover:text-white cursor-pointer hover:drop-shadow-xl shadow-white">About</a>
          <a className="mr-5 hover:text-white cursor-pointer hover:drop-shadow-xl shadow-white">Service</a>
        </nav>

        {/* drop down start */}

        <div class="relative inline-block text-left group mt-4 md:mt-0">
          <div class="">
            {/* inline css for neophormism button */}
            <button type="button" class="inline-flex items-center bg-gray-800 border-0 focus:outline-none rounded-md text-base w-full justify-center gap-x-1.5 px-3 py-2 font-semibold text-gray-400 hover:text-gray-300 focus-within:text-gray-300" id="menu-button" aria-expanded="true" aria-haspopup="true" style={{ boxShadow: "inset 5px 5px 10px #10161e, inset -5px -5px 10px #2e3e52" }} >
              Get In
              <svg class="-mr-1 h-5 w-5 text-gray-400 group-hover:rotate-180 group-focus-within:rotate-180 transition-all duration-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          <div class="hidden group-hover:block group-focus-within:block absolute right-[-77%] sm:right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1" style={{ boxShadow: "inset 5px 5px 10px #10161e, inset -5px -5px 10px #2e3e52" }}>
            <div class="py-1" role="none">
              <Link href="/login" class="text-gray-400 hover:text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Student LogIn/SignUp</Link>
              <Link href="/login" class="text-gray-400 hover:text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Admin LogIn</Link>
            </div>
          </div>
        </div>
        {/* drop down end */}

      </div>
    </header>
  );
}

export default NavBar;
