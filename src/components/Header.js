import React from 'react'

function Header() {

 
  return (
    <>
        <div className='flex bg-slate-500 justify-between p-3'>
            <button className='font-semibold '> &lt;</button>
            <p>Free shipping on orders $100+ </p>
            <button className='font-semibold'>&gt;</button>
        </div>
    </>
  )
}

export default Header