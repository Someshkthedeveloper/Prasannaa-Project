import React from 'react'
import { pvc } from './Products';

const Prodectlist = (props) => {
  
  return (
    
      <div className="pvc-cards-Parent">
          <div className="pvc-card" key={props.id}>
            <div className="pvc-img">
              <img src={props.img} alt={props.Title}  />
            </div>
            {/* <div className="pvc_tittle">
              
            </div> */}
            <div className="pvc-title">price {props.Title}</div>
          </div>
      </div>
  
  );

}

export default Prodectlist