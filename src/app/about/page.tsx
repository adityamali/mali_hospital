import React from 'react'
import Image from 'next/image'

function page() {
  return (
      <div className='flex flex-col justify-center items-center gap-20 mb-36'>
        <div className='relative w-full h-44 mt-36'>
            <Image src='/images/hero.jpg' alt='image' width={400} height={400} className='w-full h-44' />
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className='absolute inset-0 flex items-center justify-center'>
              <h2 className='impact text-3xl font-bold text-white'>About Us</h2>
            </div>
        </div>
        <div className='w-[96vw] flex flex-col justify-center items-center p-4'>
          <div className='md:w-[70vw]'>
            <p
              className='text-lg font-medium'
            >
              Mali Children&apos;s Hospital, located in Miraj, Maharashtra, is dedicated to providing comprehensive pediatric care for children of all ages. Founded by Dr. Vitthal D. Mali, a seasoned pediatrician, our hospital is equipped with advanced medical facilities and a compassionate team committed to the health and well-being of our young patients. We prioritize a family-centered approach, ensuring that each child receives personalized treatment in a supportive and comfortable environment, making us a trusted choice for families seeking quality healthcare in the Sangli-Miraj-Kupwad region.
            </p>
          </div>
        </div>
        <div className='md:w-[70vw] grid grid-cols-1 md:grid-cols-2 gap-6 p-4'>
          <div className='flex flex-col bg-slate-100 p-6 rounded-xl'>
            <h2 className='impact text-2xl font-bold mb-4'>Mission</h2>
            <p
              className='text-lg font-medium'
            >
              To deliver exceptional, patient-centered pediatric care while fostering a compassionate atmosphere and continuously improving our services for the community.
            </p>
          </div>
          <div className='flex flex-col bg-slate-100 p-6 rounded-xl'>
            <h2 className='impact text-2xl font-bold mb-4'>Vision</h2>
            <p
              className='text-lg font-medium'
            >
              To be the leading pediatric healthcare provider in the Sangli-Miraj-Kupwad region, ensuring every child achieves optimal health in a supportive environment.
            </p>
          </div>
        </div>
      </div>
  )
}

export default page