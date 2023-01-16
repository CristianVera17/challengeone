import "./block-footer.css";
import React from "react";
import Imgfooter from "../../assets/imgfooter.jpg";
import Imglogo from "../../assets/logom.png";
import Insiderlogo from "../../assets/insider.png";
import Unlimitedlogo from "../../assets/mulogo.png";

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
              <div className="text-1xl font-bold text-red-500">
                MARVEL INSIDER
              </div>
              <div className="text-3xl font-bold text-white">
                Watch, Earn, Redeem!
              </div>
              <div className="text-white">
                Get rewarded for doing what you already do as a fan.
              </div>
              <div>
                <button className="mt-5 text-white">JOIN NOW</button>
              </div>
              {/* <div>Terms and Conditions Apply.</div> */}
            </div>
            <div className="int-one-foo-two">
              <div className="text-white">Terms and Conditions Apply.</div>
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

          <div className="footer-box-one-two-tree">
            <div className="box-insider-footer">
              <div>
                <img
                  className="insider-box"
                  alt="Insider-log"
                  src={Insiderlogo}
                />
              </div>
              <div className="ml-5">
                <p className="text-white">MARVEL INSIDER</p>
                <p className="text-white">
                  Get Rewarded for Being a Marvel Fan
                </p>
              </div>
            </div>
            <div className="box-unlimited-footer">
              <div className="ml-5">
                <img className="unlimited-box" src={Unlimitedlogo} alt="" />
              </div>
              <div className="ml-10">
                <p className="text-white">MARVEL UNLIMITED</p>
                <p className="text-unlimited text-white">
                  Access Over 30,000+ Digital Comics
                </p>
              </div>
            </div>
          </div>
          <div className="footer-box-two-tree">
            <div className="text-white">REDES SOCIALES</div>
            <div className="box-red-social">
              <div className="box-social-red">
                <div className="box-rs-fr">1</div>
                <div className="box-rs-fr">1</div>
                <div className="box-rs-fr">1</div>
                <div className="box-rs-fr">1</div>
                <div className="box-rs-fr">1</div>
                <div className="box-rs-fr">1</div>
                <div className="box-rs-fr">1</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-cookie">
        <div className="box-int-cookie">
          <div>
            <p className="text-footer text-gray-500">Terms of Use</p>
          </div>
          <div>
            <p className="text-footer text-gray-500">Privacy Policy</p>
          </div>
          <dip className="text-footer text-gray-500">
            Your US State Privacy Rights
          </dip>
          <dip className="text-footer text-gray-500">
            Children's Online Privacy Policy
          </dip>
          <dip className="text-footer text-gray-500">License Agreement</dip>
          <dip className="text-footer text-gray-500">Interest-Based Ads</dip>
          <dip className="text-footer text-gray-500">Marvel Insider Terms</dip>
          <dip className="text-footer text-gray-500">©2023 MARVEL</dip>
        </div>
      </div>
    </div>
  );
}
