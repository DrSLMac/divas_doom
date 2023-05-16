'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import { CarouselPics } from '@/types/CarouselPics'

type Props = {
    carouselPics: CarouselPics,
    image: string,
  }

const Carousel = ({ carouselPics }: Props) => {
    
    return (
        <section>
            <motion.div className=' scroll-smooth overflow-hidden
            flex justify-evenly items-center mx-auto'>
                <div className='w-full flex space-x-36 snap-x snap-mandatory overflow-x-scroll p-10 '>
                    {carouselPics.map((image) => (
                        
                        <Image 
                            key={image._id}
                            src={image.image}
                            alt='carousel images'
                            height={500}
                            width={300}
                            className='rounded-md border border-navy-blue shadow-4xl h-auto'
                            priority
                        />
                    ))}
                </div>
            </motion.div>
        </section>
      )
}

Carousel.propTypes = {}

export default Carousel