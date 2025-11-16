import React from 'react'
import bannerImg from '../assets/banner.png';
import Products from '../Components/Products';
import Footer from '../Components/Footer';


const Shop = () => {

  return (
   <section className='min-h-screen '> 
        {/* banner image */}
        <div className='w-full h-[400px] bg-cover bg-center flex items-center justify-center' style={{backgroundImage: `url(${bannerImg})`}}>
          <h1 className='text-4xl text-white font-bold  '> Shop Our Products </h1>
        </div>
        {/* products List */}
        <Products headline="What's Your Choice " />
        <Footer/>
    </section>
  )
}

export default Shop