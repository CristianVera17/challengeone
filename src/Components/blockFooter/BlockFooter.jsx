import React from "react";
import Imgfooter from "../../assets/imgfooter.jpg";
import Imglogo from "../../assets/logom.png";
import Insiderlogo from "../../assets/insider.png";
import Unlimitedlogo from "../../assets/mulogo.png";
import imgfb from "../../assets/fblog.png";
import imgtw from "../../assets/twicon.png";
import imgig from "../../assets/igicon.png";
import imgtr from "../../assets/ticon.png";
import imgyt from "../../assets/yicon.png";
import imgst from "../../assets/sicon.png";
import imgps from "../../assets/picon.png";
import ButtonEdit from "../buttonEdit/ButtonEdit";
import "./block-footer.css";

export default function BlockFooter() {
  return (
    <div>
      {/* BOX ONE */}
      <div className="footer-box">
        <div className="footer-box-one">
          <div className="box-footer-img">
            <img className="img-footer" src={Imgfooter} alt="" />
          </div>
        </div>
        <div className="footer-box-int">
          <div className="footer-box-int-one">
            <div className="int-one-foo">
              <div className="insider-text">MARVEL INSIDER</div>
              <div className="marvel-text-two">Watch, Earn, Redeem!</div>
              <div className="marvel-text-tree">
                Get rewarded for doing what you already do as a fan.
              </div>
              <div>
                <button className="mt-5 text-white">
                  <ButtonEdit />
                </button>
              </div>
            </div>
            <div className="int-one-foo-two">
              <div>Terms and Conditions Apply.</div>
            </div>
          </div>
        </div>
      </div>
      {/* BOX ONE */}
      {/* BOX TWO */}
      <div className="two-box-footer">
        <div className="footer-box-two">
          <div className="footer-box-one-two">
            <div className="box-logo-img">
              <img className="img-logo-box" src={Imglogo} alt="logo" />
            </div>
          </div>

          <div className="footer-box-two-two">
            <div className="footer-box-two-int">
              <p className="text-white">ABOUT MARVEL</p>
              <p className="text-white">HELP/FAQS</p>
              <p className="text-white">CAREERS</p>
              <p className="text-white">INTERNSHIPS</p>
            </div>
            <div className="footer-box-two-int-two">
              <p className="text-white">ADVERTISING</p>
              <p className="text-white">DISNEY+</p>
              <p className="text-white">MARVELHQ.COM</p>
              <p className="text-white">REDEEM DIGITAL COMICS</p>
            </div>
          </div>
          <div className="footer-line">
            <div className="line-footer"></div>
          </div>
          <div className="footer-box-one-two-tree">
            <div className="box-insider-footer">
              <div>
                <img
                  className="insider-box"
                  alt="Insider-log"
                  src={Insiderlogo}
                />
              </div>
              <div className="ml-5 marvel-insider">
                <p className="text-white font-bold">MARVEL INSIDER</p>
                <p className="text-white text-insider">
                  Get Rewarded for Being a Marvel Fan
                </p>
              </div>
            </div>
            <div className="box-unlimited-footer">
              <div className="ml-5">
                <img className="unlimited-box" src={Unlimitedlogo} alt="" />
              </div>
              <div className="ml-10 marvel-insider">
                <p className="text-white font-bold">MARVEL UNLIMITED</p>
                <p className="text-unlimited text-white">
                  Access Over 30,000+ Digital Comics
                </p>
              </div>
            </div>
          </div>

          <div className="footer-line">
            <div className="line-footer"></div>
          </div>
          <div className="footer-box-two-tree">
            {/* <div className="follow-marvel-div"> */}
              {/* <div>hshshsh</div> */}
            {/* </div>} */}
            {/* <div className="text-white follow-marvel">FOLLOW MARVEL</div> */}
            <div className="box-red-social">
              <div className="follow-div">
                <div className="font-bold text-white">FOLLOW MARVEL</div>
              </div>
              <div className="box-social-red">
                <div className="box-rs-fr">
                  <div className="rs-box">
                    <img className="img-icon-fb" src={imgfb} alt="" />
                  </div>
                </div>
                <div className="box-rs-fr">
                  <div className="rs-box">
                    <img className="img-icon-tw" src={imgtw} alt="" />
                  </div>
                </div>
                <div className="box-rs-fr">
                  <div className="rs-box">
                    <img className="img-icon-ig" src={imgig} alt="" />
                  </div>
                </div>
                <div className="box-rs-fr">
                  <div className="rs-box">
                    <img className="img-icon-tr" src={imgtr} alt="" />
                  </div>
                </div>
                <div className="box-rs-fr">
                  <div className="rs-box">
                    <img className="img-icon-yt" src={imgyt} alt="" />
                  </div>
                </div>
                <div className="box-rs-fr">
                  <div className="rs-box">
                    <img className="img-icon-st" src={imgst} alt="" />
                  </div>
                </div>
                <div className="box-rs-fr">
                  <div className="rs-box">
                    <img className="img-icon-pr" src={imgps} alt="" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
       
        <div className="box-cookie">
        {/* <div>gika</div> */}
        <div className="box-int-cookie">
          <div className="footer-line">
            <div className="line-footer"></div>
          </div>
          <div>
            <p className="text-footer ">Terms of Use</p>
          </div>
          <div>
            <p className="text-footer ">Privacy Policy</p>
          </div>
          <div className="text-footer ">Your US State Privacy Rights</div>
          <div className="text-footer ">Children's Online Privacy Policy</div>
          <div className="text-footer ">License Agreement</div>
          <div className="text-footer ">Interest-Based Ads</div>
          <div className="text-footer ">Marvel Insider Terms</div>
          <div className="text-footer ">©2023 MARVEL</div>
        </div>
      </div>
      </div>

      {/* <div className="box-cookie">
        <div className="box-int-cookie">
          <div>
            <p className="text-footer ">Terms of Use</p>
          </div>
          <div>
            <p className="text-footer ">Privacy Policy</p>
          </div>
          <div className="text-footer ">Your US State Privacy Rights</div>
          <div className="text-footer ">Children's Online Privacy Policy</div>
          <div className="text-footer ">License Agreement</div>
          <div className="text-footer ">Interest-Based Ads</div>
          <div className="text-footer ">Marvel Insider Terms</div>
          <div className="text-footer ">©2023 MARVEL</div>
        </div>
      </div> */}
    </div>
  );
}
