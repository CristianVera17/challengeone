import React from "react";
import "./block-two-copie.css";
import Spiderimg from "../../assets/avwp.png";
import Cardone from "../../assets/cardone.jpg";
import Cardtwo from "../../assets/cardtwo.jpg";
import Cardtree from "../../assets/cardtree.jpg";
import Cardfour from "../../assets/cardfour.jpg";
import Cardfive from "../../assets/cardfive.jpg";
import Mlimg from "../../assets/mvblock.png";
import Mulogo from "../../assets/mulogo.png";

export default function BlockTwoCopie() {
  return (
    <div className="img-od">
      <div className="box-inline mt-4">
        <div className="box-int-inline">
          <div className="inline-int">
            <div className="logo-mu">
              <img className="mu-logo" src={Mulogo} alt="imageunlimited" />
            </div>

            {/* <div className="text-2xl font-bold mt-5 text-white">
              AVAILABLE NOW
            </div> */}
            <div className="sets__eyebrow">
             "AVALIABLE NOW"
            </div>

            <div className="text-4xl font-bold mt-5 text-white">
              NEW ON MARVEL UNLIMITED
            </div>
            <div className="mt-2 text-white">
              Read these plus 30,000+ digital comics for $9.99 a month!
            </div>

            <button className="button-one-ori mt-5">
            <div className="box-botton">
              <div className="box-int-bot">
                <div className="box-int-cor-two"></div>
              </div>
              GET MARVEL UNLIMITED
              <div className="box-int-bot">
              <div className="box-int-cor"></div>
              </div>
            </div>
            </button>

          </div>
        </div>
        <div className="box-int-inline-two">
          <img className="image-block" src={Mlimg} alt="" />
        </div>
      </div>

      <div className="box-five-one">
        <div className="block-five-one">
          {/* <div>Hola</div> */}
          <div className="block-five-center">
            {/* <img className="image-block" src={Mlimg} alt="" /> */}
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
                {/* <div>holaaaa</div> */}
              </div>
             
            </div>
            
          </div>
        </div>
      </div>

      {/* <div className="block-home-center"></div> */}
    </div>
  );
}
