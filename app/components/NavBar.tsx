'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import MenuBar from './MenuBar'
import Link from 'next/link'
import Image from 'next/image'

import divaLogo from '../../public/divas.png'
import MobileMenu from './MobileMenu'


const NavBar = () => {
    return (
        <section className='sticky flex items-center z-20 top-0
            w-screen bg-gradient-to-r from-navy-blue from-20% to-deep-red
            h-16
        '>
    
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.2,
                }}
                animate={{ x: 0, opacity: 1, scale: 1.1 }}
                transition={{ duration: 1.5 }}
                className='flex items-center pl-6 pr-2 w-[100%]
                xl:pl-16
                '>
                <div className='sm:hidden'>
                    <Link href='/'>
                        <Image 
                            src={divaLogo}
                            alt='Divas Logo'
                            width='150'
                            className='cursor-pointer'
                            priority
                        />
                    </Link>
                </div>
                    <SocialIcon 
                        url="https://www.facebook.com/texasdivasbasketball" 
                        fgColor="white"
                        bgColor="transparent"
                    />
                    <SocialIcon 
                        url='https://www.instagram.com/divasbasketball/?fbclid=IwAR0Yq9rhf63FQOW9AxEwOpqaCT1xJAvjAs-5lUKox_r8WjTCQNqnyDkL2OU'
                        fgColor="white"
                        bgColor="transparent"
                    />
                    <SocialIcon 
                        url='https://twitter.com/LSUwbkb'
                        fgColor="white"
                        bgColor="transparent"
                    />
                    <SocialIcon 
                        network="email"
                        fgColor="white"
                        bgColor="transparent"
                        url="/contact"
                        
                    />
                </motion.div>
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.2
                    }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5}}
                    className='flex text-white cursor-pointer'
                >
    
                <MenuBar />
                </motion.div>
            <MobileMenu />
    
        </section>
    )
  }
  
  export default NavBar