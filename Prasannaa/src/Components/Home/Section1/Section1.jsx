import React from 'react'
import './sec.css'
import {item} from './Secjs'
import { useNavigate } from 'react-router-dom'


const Section1 = () => {
  let Nav=useNavigate()
  return (
    <>
    <h1 className='sec-h1'><span>Choose</span>By Major Catogories</h1>
    <div className="sec-cards-Parent">
      {item.map((x)=>{return <div className="sec-card" onClick={()=>Nav('/Products')}>
          <div className="sec-img"><img src={x.image}/></div>
          <div className="sec-title">{x.title}</div>  
        </div>
      })}
    </div>
    </>
  )
}

export default Section1