import React from 'react'
import Image from 'next/image'

function page() {
  return (
      <div className='flex flex-col justify-center items-center gap-20'>
        <div className='w-[96%] grid grid-cols-3 gap-8 mt-40 mb-10'>
          <div className='col-span-3'>
            <h2 className='text-2xl font-bold my-8 border-l-4 border-primary pl-2'>Facilities at Mali Children&apos;s Hospital</h2>
          </div>
          <div className='col-span-1 rounded-lg flex flex-col justify-start items-center gap-2 bg-gray-100 p-2'>
            <Image src={'/images/icu.webp'} width={200} height={200} alt='Mali Hospital Logo' className='rounded-lg aspect-[16/9] h-30 w-full object-cover' />
            <h5 className='text-center font-semibold'>ICU</h5>
            <p>Ultramodern Setup with hi-tech monitors</p>
          </div>
          <div className='col-span-1 rounded-lg flex flex-col justify-start items-center gap-2 bg-gray-100 p-2'>
            <Image src={'/images/icu.webp'} width={200} height={200} alt='Mali Hospital Logo' className='rounded-lg aspect-[16/9] h-30 w-full object-cover' />
            <h5 className='text-center font-semibold'>NICU</h5>
            <p>Fully equipped with warmers, infusion pump, monitors, CPAP, with central oxygen facility.</p>
          </div>
          <div className='col-span-1 rounded-lg flex flex-col justify-start items-center gap-2 bg-gray-100 p-2'>
            <Image src={'/images/services/vaccine.webp'} width={200} height={200} alt='Mali Hospital Logo' className='rounded-lg aspect-[16/9] h-30 w-full object-cover' />
            <h5 className='text-center font-semibold'>Pediatric Vaccinations</h5>
            {/* <p>Fully equipped with warmers, infusion pump, monitors, CPAP, with central oxygen facility.</p> */}
          </div>
          <div className='col-span-3'>
          <h2 className='text-2xl font-bold my-8 border-l-4 border-primary pl-2'>Services at Mali Children&apos;s Hospital</h2>
          </div>
          <div className='col-span-1 rounded-lg flex flex-col justify-center items-center gap-2 bg-gray-100 p-2'>
            <Image src={'/images/services/chest.webp'} width={200} height={200} alt='Mali Hospital Logo' className='rounded-lg aspect-[16/9] h-30 w-full object-cover' />
            <h5 className='text-center'>Pediatric Chest & Respiratory <br/> Disease: Diagnosis and Treatment</h5>
          </div>
          <div className='col-span-1 rounded-lg flex flex-col justify-center items-center gap-2 bg-gray-100 p-2'>
            <Image src={'/images/services/liver.webp'} width={200} height={200} alt='Mali Hospital Logo' className='rounded-lg aspect-[16/9] h-30 w-full object-cover' />
            <h5 className='text-center'>Pediatric Liver & Gastroenterological <br/> Disease: Diagnosis and Treatment</h5>
          </div>
          <div className='col-span-1 rounded-lg flex flex-col justify-center items-center gap-2 bg-gray-100 p-2'>
            <Image src={'/images/services/brain.webp'} width={200} height={200} alt='Mali Hospital Logo' className='rounded-lg aspect-[16/9] h-30 w-full object-cover' />
            <h5 className='text-center'>Pediatric Brain and Epilepsy <br/> Disease: Diagnosis and Treatment</h5>
          </div>
          <div className='col-span-1 rounded-lg flex flex-col justify-center items-center gap-2 bg-gray-100 p-2'>
            <Image src={'/images/services/heart.webp'} width={200} height={200} alt='Mali Hospital Logo' className='rounded-lg aspect-[16/9] h-30 w-full object-cover' />
            <h5 className='text-center'>Pediatric Blood & Cardiac <br/> Disease: Diagnosis and Treatment</h5>
          </div>
          <div className='col-span-1 rounded-lg flex flex-col justify-center items-center gap-2 bg-gray-100 p-2'>
            <Image src={'/images/services/blood.webp'} width={200} height={200} alt='Mali Hospital Logo' className='rounded-lg aspect-[16/9] h-30 w-full object-cover' />
            <h5 className='text-center'>Pediatric Hematological <br/> Disease: Diagnosis and Treatment</h5>
          </div>
          <div className='col-span-1 rounded-lg flex flex-col justify-center items-center gap-2 bg-gray-100 p-2'>
            <Image src={'/images/services/gland.webp'} width={200} height={200} alt='Mali Hospital Logo' className='rounded-lg aspect-[16/9] h-30 w-full object-cover' />
            <h5 className='text-center'>Pediatric Endocrinological <br/> Disease: Diagnosis and Treatment</h5>
          </div>
          <div className='col-span-1 rounded-lg flex flex-col justify-center items-center gap-2 bg-gray-100 p-2'>
            <Image src={'/images/services/food.webp'} width={200} height={200} alt='Mali Hospital Logo' className='rounded-lg aspect-[16/9] h-30 w-full object-cover' />
            <h5 className='text-center'>Pediatric Nutritional <br/> Disease: Diagnosis and Treatment</h5>
          </div>
          <div className='col-span-1 rounded-lg flex flex-col justify-center items-center gap-2 bg-gray-100 p-2'>
            <Image src={'/images/services/ent.webp'} width={200} height={200} alt='Mali Hospital Logo' className='rounded-lg aspect-[16/9] h-30 w-full object-cover' />
            <h5 className='text-center'>Pediatric ENT <br/> Disease: Diagnosis and Treatment</h5>
          </div>
          <div className='col-span-1 rounded-lg flex flex-col justify-center items-center gap-2 bg-gray-100 p-2'>
            <Image src={'/images/services/skin.webp'} width={200} height={200} alt='Mali Hospital Logo' className='rounded-lg aspect-[16/9] h-30 w-full object-cover' />
            <h5 className='text-center'>Pediatric Skin <br/> Disease: Diagnosis and Treatment</h5>
          </div>
        </div>
      </div>
  )
}

export default page