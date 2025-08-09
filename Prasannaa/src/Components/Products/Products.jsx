import React from "react";
import { pvc } from "./Products";
import Prodectlist from "./Prodectlist";

const Products = () => {
  return (
    <>
    <div>
       <h1 className="pvc-h1">
          <span>pvc</span> fitting
        </h1>
      <div >
        {pvc.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div>
     {/* <div>
       <h1 className="pvc-h1">
          <span>upvc</span> fitting
        </h1>
      <div >
        {pvc.map((pvc) => (
          <Prodectlist img={pvc.img} Title={pvc.Title} price={pvc.price} />
        ))}
      </div>
    </div> */}
    </>
  );
};

export default Products;
