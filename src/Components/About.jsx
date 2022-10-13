import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1e304f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hello there. I'm Sravani, nice to see you here. Please take a look around!</p>
            </div>
            <div>
                <p>
                    I am a coding enthusiast and 
                    currently learning how to build responsive full-stack web applications with MERN. I am also learning DSA to improve my problem solving skills.
                    What would you do if you have an extremely passionate developer who has an immense potential to learning
                    and growing by building great solutions?
                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About;