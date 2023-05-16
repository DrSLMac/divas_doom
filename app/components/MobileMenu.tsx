import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Accordion, AccordionDetails, AccordionSummary, Grid, ListItem } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
        <div className='flex h-full w-full pr-4 justify-end items-center sm:hidden'>
            <div onClick={handleNav} className='cursor-pointer'>
                <AiOutlineMenu size={35} color='white'/>
            </div>
        </div>

        <div className={
            menuOpen 
            ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-5 ease-in duration-500' 
            : 'fixed left-[-100%] z-99 top-0 p-10 ease-in duration-500'
        }>
            <div className='flex z-70 w-full items-center justify-end pt-10'>
                <div onClick={handleNav} className='cursor-pointer'>
                    <AiOutlineClose size={25}/>
                </div>
            </div>
            <div className='flex-col py-4'>
                <ul>
                <Accordion >
                        <Link href='#/'>
                            <li onClick={() => setMenuOpen(false)}
                                className='px-4 py-4 transition ease-in-out hover:border-b-2 hover:font-bold duration-300'>
                                HOME
                            </li>
                        </Link>
                </Accordion>

                <Accordion >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Link href='/about'>
                            <li onClick={() => setMenuOpen(false)}
                            className='px-4 transition ease-in-out hover:border-b-2 hover:font-bold duration-300'>ABOUT</li>
                        </Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid >
                            <ListItem className='ml-5' key={1}>
                                <Link href='/about'>
                                    About
                                </Link>
                            </ListItem>
                            <ListItem className='ml-5' key={2}>
                                <Link href='/coaches'>
                                    Coaching Staff
                                </Link>
                            </ListItem>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Link href='/teams'>
                            <li onClick={() => setMenuOpen(false)}
                            className='px-4 transition ease-in-out hover:border-b-2 hover:font-bold duration-300'>TEAMS</li>
                        </Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid >
                            <ListItem className='ml-5' key={3}>
                                <Link href='/teams'>
                                    Overview of Teams
                                </Link>
                            </ListItem>
                            <ListItem className='ml-5' key={4}>
                                Doom Squad
                            </ListItem>
                            <ListItem className='ml-5' key={5}>
                                Diva Squad
                            </ListItem>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                <Accordion >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Link href='/events'>
                            <li onClick={() => setMenuOpen(false)}
                            className='px-4 transition ease-in-out hover:border-b-2 hover:font-bold duration-300'>EVENTS</li>
                        </Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid >
                            <ListItem className='ml-5' key={6}>
                                <Link href='/calendar'>
                                    Calendar
                                </Link>
                            </ListItem>
                            <ListItem className='ml-5' key={7}>
                                <Link href='/upcoming-events'>
                                    Upcoming Events
                                </Link>
                            </ListItem>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                
                <Accordion >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Link href='/contact'>
                            <li onClick={() => setMenuOpen(false)}
                            className='px-4 transition ease-in-out hover:border-b-2 hover:font-bold duration-300'>CONTACT</li>
                        </Link>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid >
                            <ListItem className='ml-5' key={8}>
                                <Link href='/contact'>
                                    Contact Us
                                </Link>
                            </ListItem>
                            <ListItem className='ml-5' key={9}>
                                <Link href='/get-involved'>
                                    How to Get Involved
                                </Link>
                            </ListItem>
                        </Grid>
                    </AccordionDetails>
                </Accordion>

                </ul>
            </div>
        </div>
    </>
  )
}  

export default MobileMenu