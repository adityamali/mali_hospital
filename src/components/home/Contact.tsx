"use client"
import React from 'react'

function Contact() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted')
    }

  return (
    <div className='flex flex-col items-center justify-center w-full h-[75vh] mb-[10rem]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 w-[86%] h-full'>
            <div className='flex flex-col justify-between h-full rounded-3xl bg-gray-50 px-6 py-8 border-2 border-gray-100'>
                <h2 className='text-2xl font-bold impact border-l-4 border-red-500 pl-3'><strong>Write to Us</strong></h2>
                <span className='text-sm'>Write to us directly and we will get back to you within 24 hours.</span>
                <form className='flex flex-col gap-4 mt-4' onSubmit={handleSubmit}>
                    <input type='text' placeholder='Name' className='w-full rounded-lg p-2 border-2 border-gray-100 outline-none' />
                    <input type='text' placeholder='Email' className='w-full rounded-lg p-2 border-2 border-gray-100 outline-none' />
                    <textarea placeholder='Message' className='w-full rounded-lg p-2 border-2 border-gray-100 h-[13rem] outline-none resize-none'></textarea>
                    <button className='bg-primary text-white rounded-lg p-2 w-full' type='submit'>Submit</button>
                </form>
            </div>
            <div className='flex flex-col justify-cente rounded-3xl bg-white'>
                {/* <iframe style={{height:100%;width:100%;border:0;}}  src="https://www.google.com/maps/embed/v1/place?q=Dr+Mali+children's+hospital&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe> */}
                <iframe className='h-full w-full rounded-3xl' src="https://www.google.com/maps/embed/v1/place?q=Dr+Mali+children's+hospital&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Contact