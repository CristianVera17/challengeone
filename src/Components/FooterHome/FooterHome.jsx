import React from "react";
import imgfooter from "../../assets/imgfooter.jpg";
import logom from "../../assets/logom.png";
import logou from "../../assets/insider.png";
import mulogo from "../../assets/mulogo.png";
import imgfb from "../../assets/fblog.png";
import imgtw from "../../assets/twicon.png";
import imgig from "../../assets/igicon.png";
import imgtr from "../../assets/ticon.png";
import imgyt from "../../assets/yicon.png";
import imgst from "../../assets/sicon.png";
import imgps from "../../assets/picon.png";
import "../../Styles/global-styles.css";

export default function FooterHome() {
  return (
    <div className="box-footer-one">
      <div className="box-block-footer">
        <div className="block-footer-box">
          <div className="block-footer-img">
            <img className="img-footer" alt="" src={imgfooter} />
          </div>
        </div>

        <div className="block-footer-box-two">
          <div className="footer-block-two mt-10">
            <div>
              <p className="text-1xl font-bold mt-3 text-white mt-11">
                MARVEL INSIDER
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold mt-3 text-white">
                Watch, Earn, Redeem!
              </p>
            </div>
            <div>
              <p className="font-bold mt-3 text-white">
                Get rewarded for doing what you already do as a fan.
              </p>
            </div>
            <button className="mt-5">
              <span>Button</span>
            </button>
          
          </div>
          <div className="box-term-cond">
            <p className="text-white text-sm">Terms and Conditions Apply.</p>
          </div>
        </div>
      </div>
   
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
       

        <div className="box-foo-two">
          <div className="box-foo-text">
            <div>
              {" "}
              <img className="img-logo-rs ml-6 " src={logou} alt=""/>
            </div>
            <div className="ml-6">
              <div className="font-bold text-white">MARVEL INSIDER</div>
              <div className="text-white">
                Get Rewarded for Being a Marvel Fan
              </div>
            </div>
          </div>
          <div className="box-foo-text">
            <div className="box-foo-text">
              <div className="ml-5">
                {" "}
                <img
                  className="img-logo-rs-mu ml-6"
                  src={mulogo}
                  alt=""
                  srcset=""
                />
              </div>
              <div>
                <div className="ml-10 box-card-text">
                  <div className="font-bold text-white">MARVEL UNLIMITED</div>
                  <div className="text-white">
                    Access Over 30,000+ Digital Comics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      
        <div className="rs">
          <div className="text-1xl text-white font-bold">FOLLOW MARVEL</div>
          <div className="box-rs">

            <div className="rs-box">
              <img className="img-icon-fb" src={imgfb} alt="" />
            </div>

            <div className="rs-box">
              <img className="img-icon-tw" src={imgtw} alt="" />
            </div>
            <div className="rs-box">
              <img className="img-icon-ig" src={imgig} alt="" />
            </div>
            <div className="rs-box">
              <img className="img-icon-tr" src={imgtr} alt="" />
            </div>
            <div className="rs-box">
              <img className="img-icon-yt"  src={imgyt} alt="" />
            </div>
            <div className="rs-box">
              <img className="img-icon-st" src={imgst} alt="" />
            </div>
            <div className="rs-box">
              <img className="img-icon-pr" src={imgps} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
