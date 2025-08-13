import React from 'react'
import Coursel from './Coursel/Courosel.jsx'
import Sec from './Section1/Section1.jsx'
import Footer from './footer/footer.jsx'
import Navbar from '../Nav/Nav.jsx'
import Sec2 from '../Sec2/Sec2.jsx'
const Mains = () => {
  return (
    <>
   <Navbar/>
    <Coursel/>
    <Sec/>
    <Sec2/>
    <Footer/>
    </>
  )
}

export default Mains