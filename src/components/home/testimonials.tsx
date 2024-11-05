'use client'

import { useState, useEffect } from 'react'
// import Image from 'next/image'

interface Testimonial {
    id: number
    name: string
    content: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Aditya Mali',
        content: 'Lörem ipsum nal autonask, ir lusinde i bina. Vakerat far etnoform för att tepp kynade. Stenokynt geon bevan. Du kan vara drabbad.'
    },
    {
        id: 2,
        name: 'Aditya Mali',
        content: 'Lörem ipsum nal autonask, ir lusinde i bina. Vakerat far etnoform för att tepp kynade. Stenokynt geon bevan. Du kan vara drabbad.'
    },
    {
        id: 3,
        name: 'Aditya Mali',
        content: 'Lörem ipsum nal autonask, ir lusinde i bina. Vakerat far etnoform för att tepp kynade. Stenokynt geon bevan. Du kan vara drabbad.'
    },
    {
        id: 4,
        name: 'Aditya Mali',
        content: 'Lörem ipsum nal autonask, ir lusinde i bina. Vakerat far etnoform för att tepp kynade. Stenokynt geon bevan. Du kan vara drabbad.'
    },
    {
        id: 5,
        name: 'Aditya Mali',
        content: 'Lörem ipsum nal autonask, ir lusinde i bina. Vakerat far etnoform för att tepp kynade. Stenokynt geon bevan. Du kan vara drabbad.'
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 3000) // Change testimonial every 5 seconds

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="w-[96%] max-w-7xl mx-auto py-8">
            <h2 className="text-xl font-bold mb-8 border-l-4 border-primary pl-4">Testimonials</h2>
            <div className="relative overflow-hidden">
                <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100 / testimonials.length}%)` }}
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                            <div className="bg-gray-50 rounded-lg p-6 shadow-sm h-full">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                                </div>
                                <p className="text-gray-600">{testimonial.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}