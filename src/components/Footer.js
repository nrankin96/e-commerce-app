import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter} from 'react-icons/bs'
import { AiOutlineMail} from 'react-icons/ai'
function Footer() {
  return (
    <div className='flex flex-col bg-[#e9e7e5]'>
        <div className='bg-[#e9e7e5] border-b border-slate-400 h-[100px]'>
        <h1 className='text-center font-bold text-lg p-4'>Follow Us On Social Media</h1>
        <div className='flex justify-center space-x-4 ' >
            <BsFacebook size={20}/>
            <BsInstagram size={20}/>
            <BsTwitter size={20}/>
        </div>
        </div>
        <div className='p-4 mx-2 md:grid md:grid-cols-3'>
         <div className='md:w-[350px] lg:w-[500px]'>
             <h1 className='font-bold pb-2 text-xl'>About Us</h1>
             <p className='py-2'>Questions or concerns? Contact us via email and one of our representatives will be happy to support you.</p>
                <div className='flex space-x-2 items-center pb-2'>
                    <AiOutlineMail size={20}/>
                <p >sewn@customercare.com</p>
                </div>
            </div>
            
            <div className=' pt-2 md:w-[150px] md:mx-[100px]'>
                <h1 className='font-bold pb-2 text-xl '>Quick Links</h1>
                <ul>
                    <li className='p-1'>Search</li>
                    <li className='p-1'>Privacy Policy</li>
                    <li className='p-1'>Terms Of Service</li>
                    <li className='p-1'>Shipping Policy</li>
                    <li className='p-1'>Contact Us</li>
                </ul>
            </div>
            <div className='flex flex-col pt-2 '>
                <h1 className='font-bold pb-2 text-xl'>Subscribe to our newsletter</h1>
                <input placeholder='First Name' className='mb-2 rounded-sm placeholder:p-2'></input>
                <input placeholder='Your email ' className='rounded-sm placeholder:p-2'></input>
                <button className='h-[50px] bg-[#92A1B3] my-4 text-gray-100'>Subscribe</button>
            </div>
            
        </div>
    </div>
  )
}

export default Footer