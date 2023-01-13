import React from "react";
import "../../Styles/global-styles.css";
// IMPORT IMG
import Hulk from "../../assets/hulk.jpg";
// ICONS
// import { Icon } from "../Icons/Icon";

export const SliderAutomatic = () => {
  return (
    <div className="slider-one">
      <ul>
        <li>
          <img className="img-hulk" src={Hulk} alt="" />
        </li>
        <li>
          <img className="img-hulk" src={Hulk} alt="" />
        </li>
        <li>
          <img className="img-hulk" src={Hulk} alt="" />
        </li>
        <li>
          <img className="img-hulk" src={Hulk} alt="" />
        </li>
      </ul>
    </div>
  );
};
