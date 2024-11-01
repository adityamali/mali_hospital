'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export default function HeroSection() {
  const mainImages = [
    '/placeholder.svg?height=900&width=1600',
    '/placeholder.svg?height=900&width=1600',
    '/placeholder.svg?height=900&width=1600',
  ]

  const secondaryImages = [
    '/placeholder.svg?height=400&width=400',
    '/placeholder.svg?height=400&width=400',
    '/placeholder.svg?height=400&width=400',
  ]

  return (
    <div className="container mx-auto px-4 py-8">   
      <div className="relative overflow-hidden rounded-3xl bg-white">
        <div className="flex flex-col md:flex-row md:items-end">
          <div className="relative w-full md:w-[calc(100%-200px)]">
            <Carousel className="w-full">
              <CarouselContent>
                {mainImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[4/3] md:aspect-[16/9]">
                      <Image
                        src={src}
                        alt={`Main image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-3xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 rounded-3xl" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
            <div className="absolute bottom-8 right-8 max-w-lg text-right">
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Get your child, the best treatment possible
              </h1>
            </div>
            <div className="absolute bottom-0 right-0 h-40 w-52 bg-white rounded-tl-3xl hidden md:block" />
          </div>
          <div className="md:w-[200px] md:-mb-12">
            <div className="h-full p-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {secondaryImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-48 w-44 overflow-hidden rounded-2xl shadow-lg">
                        <Image
                          src={src}
                          alt={`Secondary image ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
          </div>    
        </div>
      </div>
    </div>
  )
}