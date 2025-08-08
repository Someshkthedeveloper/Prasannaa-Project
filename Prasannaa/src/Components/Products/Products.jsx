import React from 'react'
import { pvc } from './Products'
import Prodectlist from './Prodectlist'

const Products = () => {
  return (
    <div>
         <div className="pvccard">
            {
                pvc.map((pvc)=><Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price}/>)
            }
         </div>
    </div>
  )
}

export default Products