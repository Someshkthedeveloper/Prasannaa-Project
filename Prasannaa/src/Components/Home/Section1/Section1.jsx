import React from 'react'
import './sec.css'
import {item} from './Secjs'
import { useNavigate } from 'react-router-dom'
import video from './asst/Video.mp4'

const Section1 = () => {
  let Nav=useNavigate()
  return (
    <>
    <div className="sect-1" >
    <h1 className='sec-h1'><span>Choose</span>By Major Catogories</h1>
     <div className="sec-cards-Parent" >
      {item.map((x)=>{return <div className="sec-card" onClick={()=>Nav('/Products',{ state: { scroll: x.link } })}>
          <div className="sec-img"><img src={x.image}/></div>
          <div className="sec-title">{x.title}</div>  
        </div>
      })}
    </div>
   </div>
    </>
  )
}

export default Section1