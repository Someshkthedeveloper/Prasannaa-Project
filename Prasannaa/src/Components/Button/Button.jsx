import React from 'react'
import './Button.css'
import { Outlet, useNavigate } from 'react-router-dom'
import phon from './phone.png'
import whatsap from './whatsapp.png'
const Button = () => {
  let Nav=useNavigate()
  return (
    <div>
    <div className='button-p'>
    <div className="whatsapps">
        <a href=" https://wa.me/+918072170800" target="blank"><img src={whatsap} alt=""/></a>
      </div>
      <div className="mobiles">
        <a href="tel:+918072170800" target='blank'><img src={phon} alt="" /></a>
        </div>
    </div>  
    </div>
  )
}

export default Button