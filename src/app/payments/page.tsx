import React from 'react'
import Image from 'next/image'

function page() {
  return (
      <div className='flex flex-col justify-center items-center gap-20'>
        <div className='mt-40 w-[96vw] bg-gray-100'>
        <h2 className='impact text-2xl font-bold mb-4 border-l-4 pl-2 border-primary m-4'>Pay Online</h2>
        <div className='grid grid-cols-2 p-8'>
          <div className='flex flex-col gap-2'>
            <ul className='list-disc'>
              <li className='list-item'>Make payment 24/7 online anytime / anywhere / any day </li>
              <li className='list-item'>All major debit and credit cards accepted</li>
              <li className='list-item'>Secure payment gateway</li>
            </ul>
            <h2 className='text-base font-bold'>UPI</h2>
            <div className='flex flex-row gap-4'>
              <Image src='/images/upi.jpg' alt='image' height={30} width={80} className='object-cover rounded-lg border-2 border-gray-200' />
              <Image src='/images/gpay.jpg' alt='image' height={30} width={80} className='object-cover rounded-lg border-2 border-gray-200' />
              <Image src='/images/paytm.svg' alt='image' height={30} width={80} className='object-cover rounded-lg border-2 border-gray-200 bg-gray-50' />
              {/* <Image src='/images/upi.png' alt='image' height={30} width={100} /> */}
            </div> 
            <h2 className='text-base font-bold'>Net Banking</h2>
            <h2 className='text-base font-bold'>Cards</h2>
          </div>
          <div>
            <form className='flex flex-col gap-4'>
              {/* <label className='text-lg font-bold'>Payment Details</label> */}
              <div>
                <label className='text-base font-bold text-gray-700'>Patient Name: </label>
                <input className='p-2 rounded-lg w-full' type="text" placeholder="Name" />
              </div>
              <div>
                <label className='text-base font-bold text-gray-700'>Patient PRN: </label>
                <input className='p-2 rounded-lg w-full' type="text" placeholder="Name" />
              </div>
              <div>
                <label className='text-base font-bold text-gray-700'>Mobile: </label>
                <input className='p-2 rounded-lg w-full' type="text" placeholder="Name" />
              </div>
              <div>
                <label className='text-base font-bold text-gray-700'>Enter Amount: </label>
                <input className='p-2 rounded-lg w-full' type="text" placeholder="Name" />
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
  )
}

export default page