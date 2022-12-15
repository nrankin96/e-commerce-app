import {useState, useEffect} from 'react'
import Card from './Card';

function Mens() {
    const [mensClothing, setMensClothing] = useState([]);

     useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/men%27s%20clothing')
            .then(res=> res.json())
            .then(json=>setMensClothing(json))
        
    },[])


               
    
  return (
    <>
        <div  >
        <h1 className='font-semibold m-2 p-2 text-center text-xl'>Shop Men's</h1>
        <section >
        <div className='grid grid-cols-2 md:flex md:m-2 gap-3 md:gap-4 m-2 lg:justify-center overflow-scroll'>
        {mensClothing.map(({id, description, image, price, title}) => {
        return (
            <div className='border-2' >
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
export default Mens;