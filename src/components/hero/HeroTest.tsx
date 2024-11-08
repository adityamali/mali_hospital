import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const HeroTest = () => {
  const mainImages = [
    { src: '/images/hero.webp', description: 'Get Your Child, The Best Treatment Possible' },
  ];
    
      const secondaryImages = [
        '/images/icu.webp',
      ]
  return (
    <div className="relative mt-[9.5rem] flex flex-col items-center justify-center md:mb-96">
      <div className="h-full md:h-[calc(100vh-10rem)] w-[96vw] mx-8 bg-primary rounded-3xl overflow-hidden">
        <Carousel>
          <CarouselContent>
            {mainImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-[16/9] md:aspect-[16/9]">
                  <Image
                    src={image.src}
                    alt={`Main image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-black opacity-30 rounded-3xl" />
                  <div className='absolute top-[35%] left-20 flex items-center justify-center'>
                    <h2 className='text-lg md:text-5xl font-bold text-white text-left w-[12rem] md:w-[30rem]' >{image.description}</h2>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
      </div>
      <div className='relative md:absolute md:top-[50vh] w-[96vw] flex flex-col md:grid md:grid-cols-2'>
        <div className='flex flex-col justify-end'>
          {/* <h2 className='impact text-2xl font-bold mb-4'>Mission</h2> */}
          <p className='text-lg font-medium md:-translate-y-[6em] p-8'>
          Committed to providing exceptional pediatric care in a compassionate environment. Your child&apos;s health and well-being are our top priorities, making us the trusted choice for families in Miraj and beyond.
          </p>
        </div>
        <div>
          <Carousel className="w-full md:border-[2rem] border-white rounded-3xl bg-white">
            <CarouselContent>
              {secondaryImages.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/9] md:aspect-[1/1] overflow-hidden rounded-2xl shadow-lg">
                    <Image
                      src={src}
                      className='h-[100%] w-[100%]'
                      alt={`Secondary image ${index + 1}`}
                      // layout="fill"
                      objectFit="cover"
                      height={400}
                      width={400}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeroTest;