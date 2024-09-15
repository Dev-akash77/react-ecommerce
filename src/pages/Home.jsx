import React from 'react'
import Hero from '../components/Home/Hero'
import Section1 from '../components/Home/Section1'
import AllCatagory from '../components/Home/AllCatagory'
import BestSelling from '../components/Home/BestSelling'
import Section2 from '../components/Home/Section2'
import OurProducts from '../components/Home/OurProducts'
import NewArrival from '../components/Home/NewArrival'
const Home = () => {
  return (
    <div className='pagestart home'>
      <Hero />
      <Section1 />
      <AllCatagory/>
      <BestSelling />
      <Section2 />
      <OurProducts/>
      <NewArrival />
    </div>
  )
}

export default Home