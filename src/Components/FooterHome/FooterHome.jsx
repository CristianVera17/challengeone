import React from "react";
import "../../Styles/global-styles.css";
import imgfooter from "../../assets/imgfooter.jpg";
import logom from "../../assets/logom.png";
import logou from "../../assets/insider.png";
import mulogo from "../../assets/mulogo.png";
import imgfb from "../../assets/fblog.png"
import imgtw from "../../assets/twicon.png"
import imgig from "../../assets/igicon.png"
import imgtr from "../../assets/ticon.png"
import imgyt from "../../assets/yicon.png"
import imgst from "../../assets/sicon.png"
import imgps from "../../assets/picon.png"




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
              <p className="text-1xl font-bold mt-3 text-white">MARVEL INSIDER</p>
            </div>
            <div>
              <p className="text-3xl font-bold mt-3 text-white">Watch, Earn, Redeem!</p>
            </div>
            <div>
              <p className="font-bold mt-3 text-white">
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

            <div className="box-foot-two">
              <div className="text-white">
              <div>ABOUT MARVEL</div>
              <div>HELP/FAQS</div>
              <div>CAREERS</div>
              <div>INTERNSHIPS</div>
              </div>
              
            </div>

            <div className="box-foot-tree">
            <div className="text-white">
              <div>ADVERTISING</div>
              <div>DISNEY+</div>
              <div>MARVELHQ.COM</div>
              <div>REDEEM DIGITAL COMICS</div>
              </div>
            </div>
          </div>
        </div>
        {/*  -----------*/}

        <div className="box-foo-two">
          <div className="box-foo-text">
            <div>
              {" "}
              <img className="img-logo-u ml-6 " src={logou} alt="" srcset="" />
            </div>
            <div className="ml-6">
            <div className="font-bold text-white">MARVEL INSIDER</div>
            <div className="text-white">Get Rewarded for Being a Marvel Fan</div>
            </div>
            
          </div>
          <div className="box-foo-text">
            <div className="box-foo-text">
              <div>
                {" "}
                <img className="img-logo-u ml-6" src={mulogo} alt="" srcset="" />
              </div>
              <div>
              <div className="ml-6 box-card-text">
            <div className="font-bold text-white">MARVEL UNLIMITED</div>
            <div className="text-white">Access Over 30,000+ Digital Comics</div>
            </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------- */}
        <div className="rs">
        <div>Follow</div>
          <div className="box-rs">
          <div className="rs-box">
            <img src={imgfb} alt="" />
          </div>
          <div className="rs-box">
          <img src={imgtw} alt="" />

          </div>
          <div className="rs-box">
          <img src={imgig} alt="" />
          </div>
          <div className="rs-box">
          <img src={imgtr} alt="" />
          </div>
          <div className="rs-box">
          <img src={imgyt} alt="" />

          </div>
          <div className="rs-box">
          <img src={imgst} alt="" />

          </div>
          <div className="rs-box">
          <img src={imgps} alt="" />

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
