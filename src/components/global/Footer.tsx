'use client'
import React from 'react';
import Image from 'next/image'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 text-black pt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <div className='flex items-center cursor-pointer' onClick={() => {window.location.href = '/'}}>
                <Image src="/images/medical-snake.png" width={16} height={16} alt="hospital" className='h-[3em] w-[3em]' />
                <div className='flex flex-col ml-2'>
                    <div className='text-balance text-3xl font-bold text-primary impact'>Dr. Mali</div>
                    <div className='text-balance font-bold impact'>Children&apos;s Hospital</div>
                </div>
            </div>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-bold mb-2">Quick Links</h2>
                        <ul>
                            <li className="mb-2"><a href="/home" className="hover:underline">Home</a></li>
                            <li className="mb-2"><a href="/services" className="hover:underline">Services</a></li>
                            <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
                            <li className="mb-2"><a href="/about" className="hover:underline">About</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                        <p>
                            <strong>Phone:</strong> (123) 456-7890
                        </p>
                        <p>
                            <strong>Email:</strong> info@malihospital.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300 text-center py-4 mt-8">
                &copy; {new Date().getFullYear()} Mali Hospital | All Rights Reserved
                <br />
                <span className='text-sm text-gray-700'>
                    Designed and Developed by <a href="https://www.linkedin.com/in/adityamali2003/" className="hover:underline text-primary font-semibold">Aditya Mali</a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;