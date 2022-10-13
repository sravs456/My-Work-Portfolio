import React from 'react'
import Windows11 from '../assets/windows11.jpg'
import TinDog from '../assets/tindog.jpg'
import DrumKit from '../assets/drumkit.jpg'
import QuoteGenerator from '../assets/quotegenerator.jpg'

const Work = () => {
  return (
    <div name ='work' className='bg-[#1e304f] w-full  md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='sm:text-right pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-6'>
                    Check out some of my recent side projects.
                </p>
            </div >
            {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                {/* Grid Item */}
                 <div  style ={{backgroundImage:`url(${Windows11})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-2xl font-bold test-white tracking-wider pl-1'>
                        A Front End Application with Vanilla JS
                       </span>
                        <div className='pt-8 text-center'>
                            
                            <a href="https://github.com/sravs456/Windows-11-Homepage-Clone">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                        </div>
                    </div>
                 </div>
                 <div  style ={{backgroundImage:`url(${TinDog})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-2xl font-bold test-white tracking-wider pl-1'>
                        Tinder for Dogs

                       </span>
                        <div className='pt-8 text-center'>
                             
                            <a href="https://github.com/sravs456/Tinder-for-Dogs">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                        </div>
                    </div>
                 </div>
                 <div  style ={{backgroundImage:`url(${QuoteGenerator})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-2xl font-bold test-white tracking-wider pl-1'>
                        Quote-generator Forever

                       </span>
                        <div className='pt-8 text-center'>                             
                            <a href="https://github.com/sravs456/Quote-generator">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                        </div>
                    </div>
                 </div>
                 <div  style ={{backgroundImage:`url(${DrumKit})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                       <span className='text-2xl font-bold test-white tracking-wider pl-1'>
                        Drum-Kit for Music Lovers

                       </span>
                        <div className='pt-8 text-center'>
                            
                             
                            <a href="https://github.com/sravs456/drum-kit">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                            
                        </div>
                    </div>
                 </div>
            </div>
        </div>

    </div>
  )
}

export default Work;