import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import Data from "./Data";
import Cards from "./Cards";
import Footer from "./Footer";


  

ReactDom.render(
  <>
    <p className="heading">Top Selling Guitars!</p>

    {Data.map( (val) =>{
      return(<Cards imgsrc={val.imgsrc} Name={val.Name} />
      
  );
    })}

    <Footer/>
  </>,
  document.getElementById("root")
);
