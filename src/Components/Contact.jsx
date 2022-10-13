import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full min-h-screen  bg-[#1e304f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/d7930652-1a59-4319-a4bb-49f760242f16" className='flex flex-col max-w-[600px] w-full'>
            <div className='sm:text-center py-20 pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>
                Submit the form below or shoot me an email - ksravani805@gmail.com
            </p>
            </div>
            <input className='my-4 p-2 bg-[#ccd6f6]'  type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]'   type="email" placeholder='Email' name='email' />
            <textarea  className='my-4 p-2 bg-[#ccd6f6]' name="Message" cols="30" rows="10"  placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>

    </div>
  )
}

export default Contact;