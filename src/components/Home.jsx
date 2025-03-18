import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-base sm:text-4xl text-pink-600'>Hello, my name is</p>
            <h1 className='text-2xl sm:text-7xl font-bold text-[#ccd6f6]'>J. Arumugam</h1>
            <h2 className='text-2xl sm:text-7xl font-bold text-[#8892b0]'>Developer</h2>
            <p className='text-sm sm:text-2xl text-[#8892b0] py-4 max-w-[700px]'>I studied at Campus de la Fonderie de l'Image for web design, then at OpenClassrooms for web development, and finally at 42 to learn C and C++ development.</p>
            <div>
                <Link to="work" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>See my projects
                        <span className='group-hover:rotate-90 duration-300'>

                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home
