import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

function Home () {
    return (
        <div name='home' className='bg-[#0a192f] w-full h-screen'>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >
                <p className='text-pink-600 text-xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Leandro Tabak,</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Frontend Developer</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Fluent in creating captivating digital experiences, 
                specializing in frontend development with a sprinkle of design prowess. 
                Passionate about crafting responsive frontend web applications that marry
                innovation with user-centric design.</p>
                <div>


                    <Link to="work" smooth={true} duration={500} >
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            View Work
                            <span className='group-hover:rotate-90 duration-300' >
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