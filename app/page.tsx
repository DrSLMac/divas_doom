'use client'
import { useState } from 'react';
import NavBar from './components/NavBar'
import Banner from './components/Banner';
import Carousel from './components/Carousel';
import { Inspiration } from 'next/font/google'
import { getCarouselPics } from '@/sanity/sanity-utils';
import { CarouselPics } from '@/types/CarouselPics';

const inspiration = Inspiration({ 
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-inspiration',
    display: "swap",
  })

  type Props = {
    carouselPics: CarouselPics;
  }


export default function Home() {
  const [carouselPics, setCarouselPics] = useState<CarouselPics>([])

  getCarouselPics().then(pics => {
    setCarouselPics(pics);
  })

  return (
      <>
        <NavBar />
        <Banner />

        <section className="bg-[url('../public/bball-bg.jpeg')] bg-cover h-screen w-screen text-center text-4xl">
          <div className='bg-slate-100/30 h-full'>
            <div className="sm:hidden">
                <h1 className={inspiration.className}>Don&apos;t Let the Name Fool You</h1>
            </div>
            <div className="sm:pt-4">
                <Carousel carouselPics={carouselPics} />
            </div>
            <div className='relative'>
              <div className="invisible sm:visible sm:text-navy-blue bg-gradient-to-b from-transparent from-3% via-slate-600 to-slate-100 to-100% bottom-0">
                  <div className="py-4 text-3xl md:text-4xl text-white">
                      <h2 >All Greatness Comes at a Cost</h2>
                      <h3> - Commitment - Obligation - Sacrifice - Team - </h3>
                  </div>
                  <div className="py-4 text-7xl md:text-8xl">
                      <h2 className={inspiration.className}>What are you willing to pay?</h2>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* block page */}

        {/* contact page */}
      </>
    )
}
