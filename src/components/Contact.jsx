import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/cc3c25e6-2c94-4260-a6a4-a0a9ae782a53" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Veuillez remplir le forumaire ci-dessous </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Nom' name="name" required="required" />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Mail' name="email" required="required" />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder='Message' required="required"></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Collaborons</button>
        </form>

    </div>
  )
}

export default Contact