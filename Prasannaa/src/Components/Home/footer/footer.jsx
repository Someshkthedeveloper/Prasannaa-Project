import React, { useEffect } from 'react'
import './footer.css'
import { useLocation, useNavigate } from 'react-router-dom';
const Footer = () => {
  // let Nav = useNavigate();

   const location = useLocation();

  useEffect(() => {
    if (location.state?.scroll) {
      const element = document.getElementById(location.state.scroll);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className='Footer' id='cont'>
      <div className="Brand">
        <h1>Prasannaa</h1>
        <h2>Electricals and Pipes</h2>
      </div>
        <div className="footer-sec-1">
        <div className="footer-s1">
        <h1 style={{color:"#5EABD6",fontSize:"20px"}}>Locate<span style={{borderBottom:"5px solid white"}}> at</span></h1>
        <h1>No.510, Main Road,</h1>
        <h1>Puliyadi</h1>
        <h1>Melaiyur - 612 101</h1>
        <h1>Kumbakonam</h1>
        </div>
        <div className="footer-s2">
            <h1 style={{color:"#5EABD6",fontSize:"20px"}}>Useful Lin<span style={{borderBottom:"5px solid white"}}>ks</span></h1>
            <a href=""><h1>Home</h1></a>
            <a href=""><h1>Gallery</h1></a>
            <a href=""><h1>Products</h1></a>
            
        </div>
        <div className="footer-s3">
            <h1 style={{color:"#5EABD6",fontSize:"20px"}}>Contact <span style={{borderBottom:"5px solid white"}}>Us</span></h1>
            <a href="mailto:rajagopalprasannaa@gmail.com"><h1>rajagopalprasannaa@gmail.com</h1></a>
            <h1>Mobile - 9790424572</h1>
        </div>
        </div>
        <div className="footer-sec-2">
            <h1>Developed by <a href="https://www.linkedin.com/in/agash-t-1a41a3298/" target='blank'>Aagash</a> & 
            <a href="https://www.linkedin.com/in/somesh-babu-b048a0368" target='blank'>Somesh</a></h1>
        </div>
    </div>
  )
}

export default Footer