import React from 'react'
import Image from 'next/image'

function page() {
  return (
      <div className='flex flex-col justify-center items-center gap-20'>
        <div className='relative w-full h-44 mt-36'>
            <Image src='/images/hero.jpg' alt='image' width={400} height={400} className='w-full h-44' />
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className='absolute inset-0 flex items-center justify-center'>
              <h2 className='impact text-3xl font-bold text-white'>About Us</h2>
            </div>
        </div>
        <div className='w-[96vw] flex flex-col justify-center items-center'>
          <div className='w-[70vw]'>
            <p
              className='text-lg font-medium'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
              Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis 
              ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. 
              Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti 
              sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
        </div>
        <div className='w-[70vw] grid grid-cols-2 gap-6'>
          <div className='flex flex-col bg-slate-100 p-6 rounded-xl'>
            <h2 className='impact text-2xl font-bold mb-4'>Mission</h2>
            <p
              className='text-lg font-medium'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
              Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
          </div>
          <div className='flex flex-col bg-slate-100 p-6 rounded-xl'>
            <h2 className='impact text-2xl font-bold mb-4'>Vision</h2>
            <p
              className='text-lg font-medium'
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. 
              Sed nisi.
            </p>
          </div>
        </div>
      </div>
  )
}

export default page