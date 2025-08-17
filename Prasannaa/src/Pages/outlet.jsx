import React from 'react'
import Buttons from '../Components/Button/Button.jsx'
import Nav from '../Components/Nav/Nav.jsx'
import { Outlet } from 'react-router-dom'
const Outlets = () => {
  return (
    <>
    <div>
    <Nav/>
    <Buttons/>
    </div>
    </>
  )
}

export default Outlets