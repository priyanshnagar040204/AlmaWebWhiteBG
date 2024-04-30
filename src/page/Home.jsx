import React from 'react'
import "./home.scss"
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/footer/Footer';
import LayoutGrid from '../components/layout-grid/LayoutGrid';
import Section23 from '../components/section-23/Section23';
import Section2 from '../components/Section2/Section2';
import Section3 from '../components/Section3/Section3';

const Home = () => {
  return (
    <div className='homePage'>
        
        <NavBar/>
      
     <LayoutGrid/>
     <div className='h2'>
      <h2>Explore Care</h2>
     </div>
     <Section23/>
     <Section2/>
     <Section3/>
     <Footer/>
      
    </div>
  )
}

export default Home
