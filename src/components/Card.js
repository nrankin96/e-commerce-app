import React from 'react'
import { MdFavoriteBorder } from 'react-icons/md'

function Card({id, description, image, price, title}) {
    
  return (
    <div className='m-4 md:m-5 flex flex-col h-[430px]  md:w-60 drop-shadow-xl' key={id}>
        <img src={image} className='h-52 w-52 mx-auto mt-2'></img>
        <p className='text-center font-sans mt-5 h-20'>{title}</p>
        <div className='flex justify-between content- mt-[40px] h-10 '>
            <p>${price}</p>
            <MdFavoriteBorder size={20}/>
        </div>
        <button className=' bg-slate-400 rounded-sm '>Add To Cart</button>

    </div>
  )
}

export default Card