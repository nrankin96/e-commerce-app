import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShopping } from 'react-icons/ai'

function NavBar() {
  return (
    <>
        <div className='flex justify-between p-2 m-2 h-[60px]'>
            <GiHamburgerMenu size={40} className='md:hidden'/>
            <h1 className='font-heading font-bold text-4xl'>Sewn.</h1>
              <ul className='hidden md:flex md:m-3 lg:items-center'>
                <li className='px-4'>Men's</li>
                <li className='px-4'>Women's</li>
                <li className='px-4'>Sale</li>
                <li className='px-4'>Contact Us</li>
              </ul>
            <div className='flex p-2 items-center '>
            <div className='flex'>
            <BsSearch size={20}  className='mr-5 md:mr-7'/>
            <input type='input' placeholder='Search' className='hidden lg:placeholder-shown:flex'></input>
            </div>
            <AiOutlineShopping size={30}/>
            </div>
            
        </div>
    </>
  )
}

export default NavBar