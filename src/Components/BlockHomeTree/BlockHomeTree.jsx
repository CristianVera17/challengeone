import React from "react";
import "../../Styles/global-styles.css";
import ImageBlock from "../../assets/hulk.jpg";

export default function BlockHomeTree() {
  return (
    <div className="block-home-init">
      <div className="block-home-one">
        <div className="block-home-center">
          <img className="image-block" src={ImageBlock} alt="" />
        </div>
      </div>

      <div className="block-home-two">
        <div className="block-two-home">
          <div className="image-block-home">
            <img className="image-block" src={ImageBlock} alt="" />
          </div>
          <div className="mt-5">
            <p>GAMES</p>
          </div>

          <div>
            <p>Marvel 2022 Year In Review: Best Moments in Games</p>
          </div>
        </div>

        <div className="block-two-home">
          <div className="image-block-home">
            <img className="image-block" src={ImageBlock} alt="" />
          </div>
          <div className="mt-5">
            <p>MOVIES</p>
          </div>

          <div>
            <p>2022 Year In Review: Favorite MCU Moment</p>
          </div>
        </div>

        <div className="block-two-home">
          <div className="image-block-home">
            <img className="image-block" src={ImageBlock} alt="" />
          </div>
          <div className="mt-5">
            <p>CULTURE & LIFESTYLE</p>
          </div>

          <div>
            <p>Marvel 2022 Year in Review: Favorite Merch</p>
          </div>
        </div>

        <div className="block-two-home">
          <div className="image-block-home">
            <img className="image-block" src={ImageBlock} alt="" />
          </div>
          <div className="mt-5">
            <p>COMICS</p>
          </div>

          <div>
            <p>Marvel 2022 Year in Review: Best Comic Issues</p>
          </div>
        </div>
      </div>
    </div>
  );
}
