
import heroimg from '../images/heroimg.jpg'

function Hero() {
  return (
    <>
        <div className="relative bg-cover bg-center h-[700px]  flex justify-center items-center" style={{backgroundImage: `url(${heroimg})`}}>
         <div className='absolute text-center'>
            <div>
                <h1 className='font-semibold text-4xl md:text-5xl p-4 m-2 md:m-4 font-heading text-black'>Check out our exclusive fall sale!</h1>
            </div>
            <div>
             <button className='w-44 h-12 md:w-52 lg:w-60 md:h-14 lg:h-16  md:text-lg lg:text-xl rounded-md bg-[#92A1B3] text-white'>Shop Now</button>
             </div>
         </div>
        </div>
    </>
  )
}

export default Hero;