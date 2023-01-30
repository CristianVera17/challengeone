import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoDisney from "../../assets/disneyedit.png";
import imgfb from "../../assets/fblog.png";
import imgtw from "../../assets/twicon.png";
import imgig from "../../assets/igicon.png";
import "../../Components/carousel/simple-slider.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // speed:100,
    };
    return (
      <div className="box-sli-one">
        <div>
          <div className="bg-new-color-tree text-center h-10 flex justify-center items-center text-white  text-xs">
            <div className="max-lg:hidden">
              STREAM THE GOTG: HOLIDAY SPECIAL EXCLUSIVELY ON
            </div>
            <div className="xl:hidden lg:hidden">
              STREAM THE GOTG: HOLIDAY SPECIAL ON
            </div>
            <img className="w-16 h-8 ml-3" src={LogoDisney} alt="" />
          </div>
        </div>
        <Slider {...settings}>
          {/* CAROUSEL CARD */}
          <div className="box-sli-two">
            <div className="box-int-carousel">
              <div>
                <div className="box-int-inline-cd">
                  <div className="inline-int mt-16">
                    {/* <div className="logo-mu">
                    </div> */}
                    <div className="sets__eyebrow">Marvel Comics</div>

                    <div className="text-new-one-two">THE AVENGERS RETURN</div>
                    <div className="mt-2 text-white text-new-one-tree">
                      This May, superstar writer Jed MacKay and Marvel
                      Stormbreaker artist C.F. Villa will take the reins of
                      Earth’s Mightiest Heroes in a new run of AVENGERS
                    </div>

                    <button className="mt-5 button-carousel-two">
                      <div className="box-botton-ca">
                        <div className="box-int-bot-ca">
                          <div className="box-int-cor-two-ca"></div>
                        </div>
                        LEARN MORE
                        <div className="box-int-bot-ca">
                          <div className="box-int-cor-ca"></div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-sli-two">
            <div className="box-int-carousel">
              <div>
                <div className="box-int-inline-cd">
                  <div className="inline-int mt-16">
             
                    <div className="sets__eyebrow">Marvel Comics</div>

                    <div className="text-new-one-two">THE AVENGERS RETURN</div>
                    <div className="mt-2 text-white text-new-one-tree">
                      This May, superstar writer Jed MacKay and Marvel
                      Stormbreaker artist C.F. Villa will take the reins of
                      Earth’s Mightiest Heroes in a new run of AVENGERS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-sli-two">
            <div className="box-int-carousel">
              <div>
                <div className="box-int-inline-cd">
                  <div className="inline-int mt-16">
                  
                    <div className="sets__eyebrow">Marvel Comics</div>

                    <div className="text-new-one-two">THE AVENGERS RETURN</div>
                    <div className="mt-2 text-white text-new-one-tree">
                      This May, superstar writer Jed MacKay and Marvel
                      Stormbreaker artist C.F. Villa will take the reins of
                      Earth’s Mightiest Heroes in a new run of AVENGERS
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
     
          
          
        </Slider>
        <div className="box-slider-card">
          <div className="box-int-card-slider">
            <div className="box-sli-cd">
              <div className="box-sli-fl">
                <div className="box-int-sli">
                  Deadpool Takes Over Midnight Suns
                </div>
                <div className="box-int-sli">
                  Answers To You Biggest MCU Questions
                </div>
                <div className="box-int-sli">This Week´s New Comics</div>
                <div className="box-int-sli">
                  Ant-Men And The Wasp Quantumania Tickets
                </div>
                <div className="box-int-sli">
                  Wakanda Forever Oscar Nominations
                </div>
              </div>
            </div>
            <div className="box-sli-cd-two">
              <div className="box-cd-two">
                <div>
                  <div className="rs-box-cd">
                    <img className="img-icon-fb" src={imgfb} alt="" />
                  </div>
                </div>
                <div>
                  <div className="rs-box-cd">
                    <img className="img-icon-tw" src={imgtw} alt="" />
                  </div>
                </div>
                <div>
                  <div className="rs-box-cd">
                    <img className="img-icon-ig" src={imgig} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="display-none">
          <div className="display-int">
            <div className="follow-marvel-none">FOLLOW MARVEL</div>
            <div className=" flex">
              <div>
                <div className="rs-box-cd">
                  <img className="img-icon-fb" src={imgfb} alt="" />
                </div>
              </div>
              <div>
                <div className="rs-box-cd">
                  <img className="img-icon-tw" src={imgtw} alt="" />
                </div>
              </div>
              <div>
                <div className="rs-box-cd">
                  <img className="img-icon-ig" src={imgig} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
