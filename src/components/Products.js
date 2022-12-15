import React, { useState, useEffect } from 'react'
import Card from './Card';

function Womens() {
    const [womensClothing, setWomensClothing] = useState([]);

     useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/women%27s%20clothing')
            .then(res=> res.json())
            .then(json=>setWomensClothing(json))
        
    },[])


               
    
  return (
    <>
        <div  >
        <h1 className='font-semibold m-2 p-2 text-center text-xl'>Shop Women's</h1>
        <section >
        <div className='grid grid-cols-2 md:flex md:m-2 gap-3 md:gap-4 m-2 overflow-scroll'>
        {womensClothing.map(({id, description, image, price, title}) => {
        return (
            <div className='border-2 ' >
            <Card 
                key={id}
                description={description}
                image={image}
                price={price}
                title={title}
            />
            </div>
        )
    })}   
    </div>
           
    </section>
        </div>
    </>
  )
}




export default Womens;
