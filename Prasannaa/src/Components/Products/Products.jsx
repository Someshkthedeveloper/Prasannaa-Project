import React from "react";
import { pvc } from "./Products";
import Prodectlist from "./Prodectlist";
import { cpvc } from "./cpvc";
import { swr } from "./swr";
import { drainage } from "./underground";
import { upvc } from "./upvc";
import { moter } from "./moter";

const Products = () => {
  return (
    <>
    <div className="main_box">
       <h2 className="pvc-h1">
          <span>CRI SUBMERSIBLE PUMPS & MOTER</span> 
        </h2>
      <div  className="map">
        {moter.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div>
    <div className="main_box">
       <h1 className="pvc-h1">
          <span>PVC</span> FITTINGS
        </h1>
      <div  className="map">
        {pvc.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div>
     <div className="main_box">
       <h1 className="pvc-h1">
          <span>CPVC</span> FITTINGS
        </h1>
      <div  className="map" >
        {cpvc.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div>
     <div className="main_box">
       <h1 className="pvc-h1">
          <span>SWR</span> FITTINGS
        </h1>
      <div  className="map">
        {swr.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div>
     <div className="main_box">
       <h1 className="pvc-h1">
          <span>UNDERGROUND DRAINAGE</span> FITTINGS
        </h1>
      <div  className="map">
        {drainage.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div>
     <div className="main_box">
       <h1 className="pvc-h1">
          <span>UPVC</span> FITTINGS
        </h1>
      <div className="map">
        {upvc.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Products;
