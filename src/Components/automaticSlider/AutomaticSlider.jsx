import React from "react";
import "./automatic-slider.css";
// import imgFb from "../../assets/fblog.png";

// IMPORT IMG
import Marvelwp from "../../assets/marvelwp.jpg";
// ICONS
// import { Icon } from "../Icons/Icon";

export const AutomaticSlider = () => {
  return (
    <div className="slider-one">
      <div>
        <ul>
          <li>
            <img className="img-hulk" src={Marvelwp} alt="" />
          </li>
          <li>
            <img className="img-hulk" src={Marvelwp} alt="" />
          </li>
          <li>
            <img className="img-hulk" src={Marvelwp} alt="" />
          </li>
          <li>
            <img className="img-hulk" src={Marvelwp} alt="" />
          </li>
        </ul>
      </div>
      <div className="box-slider-one">
        <div className="box-slider-ext">
          <div className="box-slider-int">
            <div className="box-int-sli font-bold">
              <p>Moon Girl And Devil Dinosaur</p>
            </div>
            <div className="box-int-sli font-bold">
              <p>Captain America: Cold war Begins</p>
            </div>
            <div className="box-int-sli font-bold">
              <p>This Week´s New Comics</p>
            </div>
            <div className="box-int-sli font-bold">
              <p>Free Comic Book Day</p>
            </div>
            <div className="box-int-sli font-bold">
              <p>Ant-Man And The Wasp Quantumania Trailer</p>
            </div>
          </div>
          <div className="box-slider-int-two">
            <div className="box-slider-rs">
              <div className="box-img-sli"></div>
            </div>
            <div className="box-slider-rs">Hola</div>
            <div className="box-slider-rs">Hola</div>
            <div className="box-slider-rs">Hola</div>
          </div>
        </div>
      </div>
    </div>
  );
};
