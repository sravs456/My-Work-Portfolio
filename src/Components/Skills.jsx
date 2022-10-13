import React from 'react'
import Selenium from '../assets/selenium.png'
import WebDriverIO from '../assets/webdriverio.png'
import Postman from '../assets/postman.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import javaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Node from '../assets/node.png'
import MySQL from '../assets/mysql.png'
import Java from '../assets/java.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#1e304f] text-gray-300 '>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    Skills
                </p>
                <p className='py-4'>
                    These are the technologies I have worked with so far
                </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-6 text-center '>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto ' src={Selenium} alt="Selenium Icon" />
                    <p className='my-4 '>Selenium</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-11 mx-auto' src={Java} alt="Java Icon" />
                    <p className='my-4 '>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={MySQL} alt="MySQL Icon" />
                    <p className='my-4 '>MySQL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={WebDriverIO} alt="Webdriverio Icon" />
                    <p className='my-4 '>WebDriver I/O</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Postman} alt="Postman Icon" />
                    <p className='my-4 '>Postman</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-4 '>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={CSS} alt="Css Icon" />
                    <p className='my-4 '>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={javaScript} alt="javascript Icon" />
                    <p className='my-4 '>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React Icon" />
                    <p className='my-4 '>React</p>
                </div>
              
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={GitHub} alt="Github Icon" />
                    <p className='my-4 '>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind Icon" />
                    <p className='my-4 '>tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={Node} alt="Node Icon" />
                    <p className='my-4 '>Node</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills