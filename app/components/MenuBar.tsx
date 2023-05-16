import React, { useState, MouseEvent } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import PropTypes from 'prop-types'

const MenuBar = () => {
  
  const [firstMenu, setFirstMenu] = useState(null)
  const [secondMenu, setSecondMenu] = useState(null)
  const [thirdMenu, setThirdMenu] = useState(null);
  const [fourthMenu, setFourthMenu] = useState(null)

  const openFirst = Boolean(firstMenu)
  const handleFirstClick = (event) => setFirstMenu(event.currentTarget);
  const closeFirst = () => setFirstMenu(null)
  
  const openSecond = Boolean(secondMenu);
  const handleSecondClick = (event) => setSecondMenu(event.currentTarget);
  const closeSecond = () => setSecondMenu(null);

  const openThird = Boolean(thirdMenu);
  const handleThirdClick = (event) => setThirdMenu(event.currentTarget);
  const closeThird = () => setThirdMenu(null);

  const openFourth = Boolean(fourthMenu);
  const handleFourthMenu = (event) => setFourthMenu(event.currentTarget);
  const closeFourth = () => setFourthMenu(null);

  return (
    <div className='hidden sm:flex justify-center items-center text-blue text-md 
        lg:pr-6
        xl:pr-10
        '>
            <div>
                <button
                    id="basic-button"
                    className='uppercase text-blue px-8 py-2 rounded-md transition ease-in-out hover:bg-white hover:text-navy-blue duration-300'
                >
                    <Link href='#/'>
                        Home
                    </Link>
                </button>
            </div>

            <div>
                <button
                    id="basic-button"
                    aria-controls={openFirst ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openFirst ? 'true' : undefined}
                    onClick={handleFirstClick}
                    className='uppercase text-blue px-4 py-2 rounded-md transition ease-in-out hover:bg-white hover:text-navy-blue duration-300'
                >
                    About
                </button>
                <Menu
                    id="basic-menu"
                    anchorEl={firstMenu}
                    open={openFirst}
                    onClose={closeFirst}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeFirst}>
                        <Link href='/about'>
                            About
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeFirst}>
                        <Link href='/coaches'>
                            Coaching Staff
                        </Link>
                    </MenuItem>
                </Menu>
            </div>

            <div>
                <button
                    id="basic-button"
                    aria-controls={openSecond ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openSecond ? 'true' : undefined}
                    onClick={handleSecondClick}
                    className='uppercase text-white px-4 py-2 rounded-md transition ease-in-out hover:bg-white hover:text-navy-blue duration-300
                    
                    '>
                    Teams
                </button>
                <Menu
                    id="basic-menu"
                    anchorEl={secondMenu}
                    open={openSecond}
                    onClose={closeSecond}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeSecond}>
                        <Link href='/teams'>
                            Overview of Teams
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeSecond}>
                        <Link href='/doom-squad'>
                            Doom Squad
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeSecond}>
                        <Link href='/diva-squad'>
                            Diva Squad
                        </Link>
                    </MenuItem>
                </Menu>
            </div>

            <div>
                <button
                    id="basic-button"
                    aria-controls={openThird ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openThird ? 'true' : undefined}
                    onClick={handleThirdClick}
                    className='uppercase text-white px-4 py-2 rounded-md transition ease-in-out hover:bg-white hover:text-navy-blue duration-300'
                >
                    Events
                </button>
                <Menu
                    id="basic-menu"
                    anchorEl={thirdMenu}
                    open={openThird}
                    onClose={closeThird}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeThird}>
                        <Link href='/calendar'>
                            Calendar
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeThird}>
                        <Link href='/upcoming-events'>
                            Upcoming Events
                        </Link>
                    </MenuItem>
                </Menu>
            </div>

            <div>
                <button
                    id="basic-button"
                    aria-controls={openFourth ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openFourth ? 'true' : undefined}
                    onClick={handleFourthMenu}
                    className='uppercase text-white px-4 py-2 rounded-md transition ease-in-out hover:bg-white hover:text-navy-blue duration-300'
                >
                    Contact
                </button>
                <Menu
                    id="basic-menu"
                    anchorEl={fourthMenu}
                    open={openFourth}
                    onClose={closeFourth}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={closeFourth}>
                        <Link href='/contact'>
                            Contact us
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={closeFourth}>
                        <Link href='/get-involved'>
                            Get Involved
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
  )
}

MenuBar.propTypes = {}

export default MenuBar