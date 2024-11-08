'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
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
        <div id='navbar' className='w-full h-[100px] px-4 md:px-8 flex justify-between items-center'>
            <div className='flex items-center cursor-pointer' onClick={() => {window.location.href = '/'}}>
                <Image src="/images/medical-snake.png" width={64} height={64} alt="hospital" className='h-6 w-6 md:h-[3em] md:w-[3em]' />
                <div className='flex flex-col ml-2'>
                    <div className='text-balance text-xl md:text-3xl font-bold text-primary arial-black'>Dr. Mali</div>
                    <div className='text-balance text-xs md:text-base font-semibold arial-black'>Children&apos;s Hospital</div>
                </div>
            </div>
            <div className='flex items-center gap-12'>
                <ul className='items-center gap-12 hidden md:flex'>
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
                <div className='md:hidden'>
                    <button onClick={() => setMenuOpen(!menuOpen)} className='focus:outline-none'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                        </svg>
                    </button>
                    {menuOpen && (
                        <ul className='fixed left-0 top-0 h-screen w-screen flex flex-col justify-center items-center bg-white font-semibold text-lg text-primary shadow-md rounded-md py-2'>
                            <div className='absolute top-4 flex justify-between items-center px-4 py-4 w-screen'>
                                <a href='/'>
                                    <Image src="/images/medical-snake.png" width={64} height={64} alt="hospital" className='h-6 w-6 md:h-[3em] md:w-[3em]' />
                                </a>
                                <button onClick={() => setMenuOpen(false)} className='focus:outline-none'>
                                    <svg className='w-7 h-7' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                </button>
                            </div>
                            <li className='px-4 py-4'><a href='/'>Home</a></li>
                            <li className='px-4 py-4'><a href='/about'>About Us</a></li>
                            <li className='px-4 py-4'><a href='/services'>Services</a></li>
                            <li className='px-4 py-4'><a href='/contact'>Contact Us</a></li>
                            <li className='px-4 py-4'><a href='/payments'>Pay Online</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar