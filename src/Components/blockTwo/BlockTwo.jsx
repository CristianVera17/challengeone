import React from "react";
import "./block-two.css";
import Spiderimg from "../../assets/avwp.png";

import Cardone from "../../assets/cardone.jpg";
import Cardtwo from "../../assets/cardtwo.jpg";
import Cardtree from "../../assets/cardtree.jpg";
import Cardfour from "../../assets/cardfour.jpg";
import Cardfive from "../../assets/cardfive.jpg";


import Mlimg from "../../assets/mvwp.png";



export default function BlockTwo() {
  return (
    <div>
      <div className="box-five-one">
        <div className="block-five-one">
          <div className="block-five-center">
            <img className="image-block" src={Mlimg} alt="" />
          </div>
        </div>

        <div className="box-five-tree">
          <div className="box-int-tree">
            <div className="wrapper">
              <div className="item">
                <img className="image-block" src={Cardone} alt="" />
              </div>
              <div className="item">
                <img className="image-block" src={Cardtwo} alt="" />
              </div>
              <div className="item">
                <img className="image-block" src={Cardtree} alt="" />
              </div>
              <div className="item">
                <img className="image-block" src={Cardfour} alt="" />
              </div>
              <div className="item">
                <img className="image-block" src={Cardfive} alt="" />
              </div>
              <div className="item">
                <img className="image-block" src={Spiderimg} alt="" />
              </div>
              <div className="item">
                <img className="image-block" src={Spiderimg} alt="" />
              </div>
              <div className="item">
                <img className="image-block" src={Spiderimg} alt="" />
              </div>
              <div className="item">
                <img className="image-block" src={Spiderimg} alt="" />
              </div>
              <div className="item">
                <img className="image-block" src={Spiderimg} alt="" />
              </div>
              <div className="item">
                <img className="image-block" src={Spiderimg} alt="" />
              </div>
              <div className="item">
                <img className="image-block" src={Spiderimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-home-center"></div>
    </div>
  );
}

// BLOQUE 5 ANTERIOR AL FOOTER
