import React from 'react'
import Image from 'next/image'

function Doctors() {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
    <div className='flex flex-col items-center justify-center w-[86%]'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-10'>
          <Image src="/images/vitthalmali.png" alt="Dr Vitthal Mali" height={300} width={392} />
          <div className='w-[75%] flex flex-col justify-center'>
            <h2 className='text-2xl font-bold impact'><strong>Dr. Vitthal D. Mali</strong></h2>
            <span className='text-sm font-bold'>MD. PED, MBBS</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit qui ad harum quia nulla voluptates expedita cum id est, eligendi, dolore amet fugiat atque pariatur.</p>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-10'>
          <div className='w-[75%] flex flex-col justify-center ml-[20%]'>
            <h2 className='text-2xl font-bold impact'><strong>Dr. Swati V. Mali</strong></h2>
            <span className='text-sm font-bold'>BAMS</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit qui ad harum quia nulla voluptates expedita cum id est, eligendi, dolore amet fugiat atque pariatur.</p>
          </div>
          <div className='flex justify-end items-center'>
            <Image src="/images/swatimali.png" alt="Dr Swati Mali" height={300} width={392} />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Doctors