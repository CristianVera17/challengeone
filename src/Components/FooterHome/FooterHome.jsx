import React from "react";
import "../../Styles/global-styles.css";
import imgfooter from "../../assets/imgfooter.jpg";
import logom from "../../assets/logom.png";
import logou from "../../assets/insider.png";
import mulogo from "../../assets/mulogo.png";

export default function FooterHome() {
  return (
    <div className="box-footer-one">
      <div className="box-block-footer">
        <div className="block-footer-box">
          <div className="block-footer-img">
            <img className="img-footer" src={imgfooter} />
          </div>
        </div>

        <div className="block-footer-box-two">
          <div className="footer-block-two mt-10">
            <div>
              <p className="text-1xl font-bold mt-3">MARVEL INSIDER</p>
            </div>
            <div>
              <p className="text-3xl font-bold mt-3">Watch, Earn, Redeem!</p>
            </div>
            <div>
              <p className="font-bold mt-3">
                Get rewarded for doing what you already do as a fan.
              </p>
            </div>
            <div className="BUTON mt-4">
              <button>JOIN NOW</button>
            </div>
          </div>
          <div className="box-term-cond">
            <p>Terms and Conditions Apply.</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="box-foo-one">
        <div className="box-foo">
          <div className="box-foot-one">
            <div>
              <img src={logom} alt="" />
            </div>

            <div className="box-foot-two">Hola</div>

            <div className="box-foot-tree">Hola</div>
          </div>
        </div>
        <div className="box-foo-two">
          <div className="box-foo-text">
            <div>
              {" "}
              <img className="img-logo-u" src={logou} alt="" srcset="" />
            </div>
            <div>hola</div>
          </div>
          <div className="box-foo-text">
            <div className="box-foo-text">
              <div>
                {" "}
                <img className="img-logo-u" src={mulogo} alt="" srcset="" />
              </div>
              <div>hola</div>
            </div>
          </div>
        </div>
        <div className="box-foo-tree">1</div>
      </div>
      {/*  */}
    </div>
  );
}
