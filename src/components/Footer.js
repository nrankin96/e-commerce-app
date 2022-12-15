import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import { AiOutlineMail} from 'react-icons/ai'
function Footer() {
  return (
    <div className='flex flex-col  bg-[#e9e7e5]'>
        <div className='bg-[#e9e7e5]'>
        <h1 className='text-center'>Follow Us On Social Media</h1>
        <div className='flex justify-center m-4 space-x-4 ' >
            <BsFacebook size={20}/>
            <BsInstagram size={20}/>
            <BsTwitter size={20}/>
        </div>
        </div>
        <div className='p-2 mx-2 '>
            <h1 className='font-bold pb-2 text-lg'>About Us</h1>
            <p className='py-2'>Questions or concerns? Contact us via email and one of our representatives will be happy to support you.</p>
            <div className='flex space-x-2 items-center pb-2'>
                <AiOutlineMail size={20}/>
                <p >sewn@customercare.com</p>
            </div>
            
            <div>
                <h1 className='font-bold pb-2 text-lg'>Quick Links</h1>
                <ul>
                    <li className='p-1'>Search</li>
                    <li className='p-1'>Privacy Policy</li>
                    <li className='p-1'>Terms Of Service</li>
                    <li className='p-1'>Shipping Policy</li>
                    <li className='p-1'>Contact Us</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <h1 className='font-bold pb-2 text-lg'>Subscribe to our newsletter</h1>
                <input placeholder='First Name'></input>
                <input placeholder='Your email '></input>
                <button>Subscribe</button>
            </div>
            
        </div>
    </div>
  )
}

export default Footer