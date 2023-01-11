import React from "react";
import "../../Styles/global-styles.css";
// IMPORT IMG
import Hulk from "../../assets/hulk.jpg";
// ICONS
// import { Icon } from "../Icons/Icon";
// ICONS PNG
// import fbicon from '../Icons/fbicon.png'
// import twicon from '../Icons/twicon.png'
// import igicon from '../Icons/igicon.png'

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

