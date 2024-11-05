'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
    id: number
    name: string
    avatar: string
    content: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Abhinandan K',
        avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjVcezHVYQYzH8ioKNyhALLHL88q8Q54RHNqQ5GX_VmmPA9hmMM=w120-h120-p-rp-mo-ba2-br100',
        content: 'Best infrastructure and services , cooperative staff and Dr. Mali sir are very expert in diagnosis and treatment.'
    },
    {
        id: 2,
        name: 'Siddhi Ajagaonkar',
        avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjW53tOom3zqN0RWCCWLcupLCZouKyY-3A3_eL5WzWGXuBbHsag=w120-h120-p-rp-mo-ba4-br100',
        content: "Dr. Vitthal mali, A doctor who listens to one's problem. A well spoken man I tell you. Doesn’t complicate anything, listens properly, understands the problem and gives a medicine that works well and is not expensive. Hospital is clean, staff is good and they don’t keep ppl waiting for hours."
    },
    {
        id: 3,
        name: 'Basavarajeshwari Ambi',
        avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjX95kzH9s9lW1j4AkfGeJEhTUrYgrBksBdEboz-_e-jtDmuSGaS=w120-h120-p-rp-mo-ba5-br100',
        content: "Best hospital in town... Right from my birth I consult here.... It's been 20 years till then now.... If something won't cure for a long ... I still consult him."
    },
    {
        id: 4,
        name: 'Kapil Beladar',
        avatar: 'https://ui-avatars.com/api/?name=Kapil+Beladar&background=random&size=120',
        content: 'Good hospital for children..nice staff..clean and tidy ..Dr also very kindness gives perfect medicine for children..'
    },
    {
        id: 5,
        name: 'Deepak Phalle',
        avatar: 'https://ui-avatars.com/api/?name=Deepak+Phalle&background=random&size=120',
        content: 'Children hospital. Best treatment given in best atmosphere.'
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
                                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                                        <img src={testimonial.avatar} alt="avatar" width={120} height={120} className='w-12 h-12 bg-gray-200 rounded-full mr-4'/>
                                    </div>
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