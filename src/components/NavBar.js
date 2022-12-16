import {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShopping, AiOutlineClose} from 'react-icons/ai'

function NavBar() {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
      setNav(!nav);
  }

  return (
    <>
        <nav className='flex justify-between p-2 m-2 h-[60px] relative z-[100]'>
            <h1 className='font-heading font-bold text-4xl '>Sewn.</h1>
              <ul className='hidden md:flex md:m-3 lg:items-center'>
                <li className='px-4'>Men's</li>
                <li className='px-4'>Women's</li>
                <li className='px-4'>Sale</li>
                <li className='px-4'>Contact Us</li>
              </ul>
            <div className='flex p-2 items-center '>
            <div className='flex'>
            <BsSearch size={20}  className='mr-5 md:mr-7 hidden md:flex'/>
            <input type='input' placeholder='Search' className='hidden lg:placeholder-shown:flex'></input>
            </div>
            <AiOutlineShopping size={30} className='hidden md:flex'/>
            </div>
            
      
      <div onClick={handleNav} className='block md:hidden'>

    {!nav ? <AiOutlineClose /> :  <GiHamburgerMenu size={40}/>
}

    </div>
    <div className={!nav ? 'fixed left-0 top-0 w-[70%] h-[200%] border-r border-r-gray-900 bg-white ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] md:hidden '}>
    <h1 className='font-heading font-bold text-4xl p-4'>Sewn.</h1>
        <ul className='uppercase p-4 space-y-2'>
                <li className='px-4'>Men's</li>
                <li className='px-4'>Women's</li>
                <li className='px-4'>Sale</li>
                <li className='px-4'>Contact Us</li>
        </ul>
    </div>
    </nav>
    </>
  )
}

export default NavBar