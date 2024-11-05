"use client"
import React from 'react'
import Image from 'next/image'
import Contact from '@/components/home/Contact'

function page() {
  return (
      <div className='flex flex-col justify-center items-center gap-20'>
        <div className='grid grid-cols-2 w-[96vw] gap-10 mt-40'>
            <div className='relative p-10 flex flex-col justify-center'>
              <h2 className='impact text-3xl font-bold text-primary pb-2'>Get In Touch</h2>
              <p>
                We&apos;d love to hear from you! Whether you have questions, need support, or want to learn more about our services, our team is here
                to help. Please feel free to reach out to us at any time.
              </p>
            </div>
            <div className='grid grid-cols-2 grid-flow-row gap-10'>
                  <div className='flex flex-col gap-2 border border-gray-200 rounded-3xl p-4 bg-gray-50 hover:shadow-xl cursor-pointer transi' onClick={() => {window.location.href = 'tel:+02332222224'}}>
                    <Image src='/assets/icons/telephone.svg' width={24} height={24} alt='phone' className='mb-10 black-icon' />
                    <span className='font-bold impact'>Call</span>
                    <span className='text-balance'>Speak to Our Friendly Team</span>
                    <span className='text-xs font-bold'>+0233-2222224</span>
                  </div>
                  <div className='flex flex-col gap-2 border border-gray-200 rounded-3xl p-4 bg-gray-50 hover:shadow-xl cursor-pointer'>
                    <Image src='/assets/icons/map.svg' width={24} height={24} alt='phone' className='mb-10 black-icon' />
                    <span className='font-bold impact'>Visit</span>
                    <span className='text-balance'>Visit Our Hospital</span>
                    <span className='text-xs font-bold'>View On Google Maps</span>
                  </div>
                  <div className='flex flex-col gap-2 border border-gray-200 rounded-3xl p-4 bg-gray-50 hover:shadow-xl cursor-pointer'>
                    <Image src='/assets/icons/mail.svg' width={24} height={24} alt='phone' className='mb-10 black-icon' />
                    <span className='font-bold impact'>Write</span>
                    <span className='text-balance'>Connect using email</span>
                    <span className='text-xs font-bold'>info@mali-hospital.com</span>
                  </div>
                  <div className='flex flex-col gap-2 border border-gray-200 rounded-3xl bg-gray-200'>
                    {/* <Image src='/images/hero.jpg' width={1080} height={1080} alt='phone' className='h-full w-full rounded-3xl'  /> */}
                  </div>
            </div>
        </div>
        <Contact />
      </div>
  )
}

export default page