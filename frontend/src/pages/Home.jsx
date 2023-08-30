import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Card from '../components/Card/Card'
import Footer from '../components/Footer/Footer'
import Carousel from '../components/Carousel/Carousel'


const Home = () => {
  return (
    <div>
       <Navbar/>
       <div><Carousel/></div>
      <div>
        <Card />
      </div>
      <Footer/>
    </div>
  )
}

export default Home