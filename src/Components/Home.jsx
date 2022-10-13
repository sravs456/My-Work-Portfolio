import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen bg-[#1e304f]'>
{/* Container */}
<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
<p className='text-pink-600 text-2xl font-semibold'> Hi, my name is</p>
<h1 className='text-4xl my-2 sm:text-7xl font-bold text-gray-50'>Sravani Kinjarapu</h1>
<h3 className='text-2xl  sm:text-2xl  text-gray-300 '>I'm an <b>Automation Test Engineer</b> and an aspiring <b>Full-Stack Web Developer</b>.</h3>
<p className='text-gray-300 py-4 max-w-[700px]'>I am also a Writer (Freelance) and currently focussing on building strong DSA skills 
    alongside creating Web Applications.</p>
    
    <div>
        <button className=' text-gray-50 group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>  View Work 
            <span className=' group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span >
            
            </button>
    </div>
    </div>
    </div>
  )
}

export default Home