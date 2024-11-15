

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'


import React from 'react'
const page = () => {
return (
  <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
          <p className="p-regular-20 md:p-regular-24">"IGDTUW's very own platform to host and participate in hackathons, coding competitions, and college fests – empowering students to showcase skills and foster innovation."</p>
          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link href="#events">
              Explore Now
            </Link>
          </Button>
        </div>

        <Image 
          src="/assets/images/hero.png"
          alt="hero"
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
        />
      </div>
    </section> 

    <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
      <h4 className="h4-bold"><br /> 💜Thousands of students</h4>

      <div className="flex w-full flex-col gap-5 md:flex-row">
        
      </div>

     
    </section>
  </>
)
}

export default page
