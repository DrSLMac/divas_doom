import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

type Props = {
    params: { images: string };
  }

const Carousel = ({ params }: Props) => {
    return (
        <section>
            <motion.div className=' scroll-smooth overflow-hidden
            flex justify-evenly items-center mx-auto'>
                <div className='w-full flex space-x-36 snap-x snap-mandatory overflow-x-scroll p-10 '>
                    {/* {images.map((image) => (
                        <Image 
                            key={image.id}
                            src={image.src.src}
                            alt='carousel images'
                            height={500}
                            width={300}
                            className='rounded-md border border-navy-blue shadow-4xl h-auto'
                            priority
                        />
                    ))} */}
                </div>
            </motion.div>
        </section>
      )
}

Carousel.propTypes = {}

export default Carousel