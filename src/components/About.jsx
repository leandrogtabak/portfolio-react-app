import React from 'react'
import { Element } from 'react-scroll';


function About () {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' >
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                    </div>
                    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p data-aos="fade-right">Hey there, welcome!</p>
                            <p data-aos="fade-right">Feel free to explore and discover more about my journey.</p>
                        </div>
                        <div data-aos="fade-left"> 
                            <p>Passionate about crafting outstanding software solutions that enhance the lives of those in my sphere.
                            Specializing in developing software for diverse clients, from individuals and small businesses to
                            large enterprise corporations. Imagine having a software expert at your fingertips—what
                            possibilities would it unlock?</p>
                        </div>
                    </div>
                </div>
            </div>
    
    )
}

export default About
