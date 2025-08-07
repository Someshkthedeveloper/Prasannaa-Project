import React from 'react'
import {items} from './Routeritem.js'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
    {items.map(({path,Component})=><Route path={path} Component={Component}/>)}
    </Routes>
    </BrowserRouter>
  )
}

export default Routers