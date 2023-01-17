import React from "react";
import "./automatic-slider.css";
import Marvelwp from "../../assets/marvelwp.jpg";
import Mwpmarvel from "../../assets/mwpmarvel.webp"
import Mwpmarveltwo from "../../assets/wpmarvel.jpg"
import Mwpmarveltree from "../../assets/wptmarvel.jpg"


import imgfb from "../../assets/fblog.png";
import imgtw from "../../assets/twicon.png";
import imgig from "../../assets/igicon.png";

export const AutomaticSlider = () => {
  return (
    <>
      <div className="slider-one">
        {/* --------- */}
        <div>
          <ul className="ul-li">
            <li>
              <img className="img-hulk" src={Mwpmarvel} alt="" />
            </li>
            <li>
              <img className="img-hulk" src={Mwpmarveltwo} alt="" />
            </li>
            <li>
              <img className="img-hulk" src={Mwpmarveltree} alt="" />
            </li>
            <li>
              <img className="img-hulk" src={Marvelwp} alt="" />
            </li>
          </ul>
        </div>
        {/* --------- */}
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
          </div>
        </div>

        {/*  */}


        <div className="box-slider-card">
          <ul className="ul-li">
            <li>
              {/* <img className="img-hulk" src={Mwpmarvel} alt="" /> */}
              <div className="box-ul">
                <div className="ul-box-int">
                <div>MARVEL COMICS</div>
                <div>CAPTAIN AMERICA: COLD WAR BEGINS</div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, eveniet expedita dolores iusto eum cupiditate dolorem, distinctio quidem, quos perspiciatis deserunt aliquam soluta impedit? </div>
                <div><button>LEARN MORE</button></div>
                </div>
               
              </div>
            </li>

            <li>
              {/* <img className="img-hulk" src={Mwpmarvel} alt="" /> */}
              <div className="box-ul">
                <div className="ul-box-int">
                <div>MARVEL COMICS</div>
                <div>CAPTAIN AMERICA: COLD WAR BEGINS</div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, eveniet expedita dolores iusto eum cupiditate dolorem, distinctio quidem, quos perspiciatis deserunt aliquam soluta impedit? </div>
                <div><button>LEARN MORE</button></div>
                </div>
               
              </div>
            </li>

            <li>
              {/* <img className="img-hulk" src={Mwpmarvel} alt="" /> */}
              <div className="box-ul">
                <div className="ul-box-int">
                <div>MARVEL COMICS</div>
                <div>CAPTAIN AMERICA: COLD WAR BEGINS</div>
                <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, eveniet expedita dolores iusto eum cupiditate dolorem, distinctio quidem, quos perspiciatis deserunt aliquam soluta impedit? </div>
                <div><button>LEARN MORE</button></div>
                </div>
               
              </div>
            </li>

            
          </ul>
        </div>


        <div></div>
      </div>
      {/*  */}
      <div className="slider-rs-aut">
        <div className="slider-rs-int">
          <div className="rs-box">
            <img className="img-icon-fb" src={imgfb} alt="" />
          </div>

          <div className="rs-box">
            <img className="img-icon-tw" src={imgtw} alt="" />
          </div>

          <div className="rs-box">
            <img className="img-icon-ig" src={imgig} alt="" />
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};