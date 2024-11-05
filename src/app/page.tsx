// To Do:
// ==================================================== //

// Development:
// - Build the Services Page
// - Fetching Bill Details from Docon 
// - Connect Payment Gateway (Stripe/Razorpay) 
// - Fetch Testimonials from Google Business Profile 
// - Change Placeholder Images and Text
// ==================================================== //

// Post Deployment:
// - Add Google Analytics
// - Add Google Search Console
// - Add Google Optimize
// - Add Google Tag Manager
// - Add Google Site Verification
// - Add Google Webmaster Tools
// - Add Google PageSpeed Insights
// ==================================================== //

import Image from 'next/image'

import services from '@/data/services-home'
import Doctors from '@/components/home/doctors';
import HeroTest from '@/components/hero/HeroTest';
import Testimonials from '@/components/home/testimonials';
import Contact from '@/components/home/Contact';



export default function Home() {

  return (
    <div className='flex flex-col gap-36'>
      <HeroTest />
      <div className='w-full mt-9 flex flex-col justify-between items-center'>
        <div className='flex flex-col items-center w-[96%] rounded-3xl'>
          <div className='flex items-center w-full bg-primary rounded-3xl text-white md:p-0'>
            <div className='text-xl font-bold py-20 px-4 md:px-[25%] text-center'>
            Equipped with advanced medical technology and specialized pediatric services to ensure the highest standard of care for your child.
            </div>
          </div>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-10'>
            {services.map((service) => (
              <div key={service.id} className='p-4 rounded-lg flex flex-col items-center gap-2'>
                {/* <span className='icon-placeholder mb-2'>{service.icon}</span> Use different icon for each element */}
                <div className='flex items-center justify-center bg-primary rounded-3xl w-16 h-16 text-white'>
                  <Image src={service.icon} width={32} height={32} alt={service.title} />
                </div>
                {/* <Image src={service.icon} width={64} height={64} alt={service.title} /> */}
                <span>{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Doctors /> 
      <Testimonials />
      <Contact />
    </div>
  );
}
