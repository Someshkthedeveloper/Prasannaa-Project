import React, { useEffect } from "react";
import { pvc } from "./Products";
import Prodectlist from "./Prodectlist";
// import Home from "../Home";
import { cpvc } from "./cpvc";
import { swr } from "./swr";
import { drainage } from "./underground";
import { upvc } from "./upvc";
import { moter } from "./moter";
import { panal } from "./panal";
import { pipes } from "./pipe";
import { CASING } from "./casing";
import { useLocation, useNavigate } from "react-router-dom";

const Products = () => {

  let Nav = useNavigate();
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
    <>
    <div className="Bluebar" onClick={()=>Nav('/')}>
      <h1>
      Choose By Category
      </h1>
    </div>
    <div className="main_box" id="1">
       <h2 className="pvc-h1">
          <span>CRI SUBMERSIBLE PUMPS & MOTORS</span> 
        </h2>
      <div  className="map">
        {moter.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div>
    <div className="main_box" id="7">
       <h2 className="pvc-h1">
          <span>STARTERS & PANAL</span> 
        </h2>
      <div  className="map">
        {panal.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price}qt={pvc.qt}  />
        ))}
      </div>
    </div>
    <div className="main_box" id="8">
       <h1 className="pvc-h1">
          <span>PVC</span> FITTINGS
        </h1>
      <div  className="map">
        {pvc.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price}  />
        ))}
      </div>
    </div>
     <div className="main_box" id="3">
       <h1 className="pvc-h1">
          <span>CPVC</span> FITTINGS
        </h1>
      <div  className="map" >
        {cpvc.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div>
     <div className="main_box" id="4">
       <h1 className="pvc-h1">
          <span>SWR</span> FITTINGS
        </h1>
      <div  className="map">
        {swr.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div>
     <div className="main_box"id="5">
       <h1 className="pvc-h1">
          <span>UNDERGROUND DRAINAGE</span> FITTINGS
        </h1>
      <div  className="map">
        {drainage.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div>
     <div className="main_box" id="2">
       <h1 className="pvc-h1">
          <span>UPVC</span> FITTINGS
        </h1>
      <div className="map">
        {upvc.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div>
     <div className="main_box">
       <h1 className="pvc-h1">
          <span>pipes all variety </span> 
        </h1>
      <div className="map">
        {pipes.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title}  />
        ))}
      </div>
    </div>
     <div className="main_box" id="6">
       <h1 className="pvc-h1">
          <span>CASING PIPE </span> 
        </h1>
      <div className="map">
        {CASING.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title}  />
        ))}
      </div>
    </div>
    </>
  );
};

export default Products;
