import React from 'react';
import FoodCategory from '../components/FoodCategory';
import SliderSection from '../components/SliderSection';
import Products from '../components/Products';
import Discount from '../components/Discount';
import Testimonials from '../components/Testimonials';
import Service from '../components/Service';
import NewsBlog from '../components/NewsBlog';

const Home = ({ user, products }) => {
  
  return (
   <main>
      <SliderSection/>
      <FoodCategory/>
      <Products user={user} products={products} />
      <Discount/>
      <Testimonials/>
      <Service/>
      <NewsBlog/>
   </main>
  )
}

export default Home