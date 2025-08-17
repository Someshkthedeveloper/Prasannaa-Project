import React from 'react'
import {items} from './Routeritem.js'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Outlets from '../Pages/outlet.jsx'
const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Outlets/>}>
    {items.map(({path,Component})=><Route path={path} Component={Component}/>)}
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routers