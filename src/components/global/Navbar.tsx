'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

function Navbar() {
  return (
    <div className='absolute z-50 bg-white'>
        <div id='topbar' className='w-[100vw] h-12 bg-primary text-white flex justify-between items-center px-8 text-base'>
            <a className='flex items-center' href='tel:+02332222224'>
                    <Image src="/assets/icons/telephone.svg" width={16} height={16} alt="search" />
                    <span className='text-balance'>0233-2222224</span>
            </a>
            <a className='flex items-center' href='https://maps.app.goo.gl/R9pUMdJb4qBkRSZy9' target="_blank" rel="noopener noreferrer">
                    <Image src="/assets/icons/map.svg" width={16} height={16} alt="map" />
                    <span className='text-balance'>Get Directions</span>
            </a>
        </div>
        <div id='navbar' className='w-full h-[100px] px-8 flex justify-between items-center'>
            <div className='flex items-center cursor-pointer' onClick={() => {window.location.href = '/'}}>
                <Image src="/images/medical-snake.png" width={16} height={16} alt="hospital" className='h-[3em] w-[3em]' />
                <div className='flex flex-col ml-2'>
                    <div className='text-balance text-3xl font-bold text-primary impact'>Dr. Mali</div>
                    <div className='text-balance font-bold impact'>Children&apos;s Hospital</div>
                </div>
            </div>
            <div className='flex items-center gap-12'>
                <ul className='flex items-center gap-12'>
                    <li>
                        <a className='text-balance' href='/'>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className='text-balance' href='/about'>
                            About Us
                        </a>
                    </li>
                    <li>
                        <Link className='text-balance' href='/services'>
                            Services
                        </Link>
                    </li>
                    <li>
                        <a className='text-balance' href='/contact'>
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a className='text-balance' href='/payments'>
                            Pay Online
                        </a>
                    </li>
                </ul>
                <Button text='Book Appointment' onClick={() => {window.location.href = 'https://docon.co.in/patientmweb/doctors/vitthalmali'}} />
            </div>
        </div>
    </div>
  )
}

export default Navbar