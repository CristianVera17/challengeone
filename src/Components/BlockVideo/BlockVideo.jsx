import React from "react";
import "./block-video.css";

export default function BlockVideo() {
  return (
    <>
      <div className="box-view">
        <div className="box-view-int">
          <div className="view-one">
            <iframe
              width="100%"
              height="100%"
              className="iframe-css-two"
              src="https://www.youtube.com/embed/ELtbTkqXXQo"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="view-two">
            <div className="box-scroll">
              <div className="box-int-scroll">
                <div className="card-scroll">
                  <iframe
                    width="560"
                    height="115"
                    className="iframe-css"
                    src="https://www.youtube.com/embed/ELtbTkqXXQo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="card-scroll">
                  <iframe
                    width="560"
                    height="315"
                    className="iframe-css"
                    src="https://www.youtube.com/embed/ELtbTkqXXQo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="card-scroll">
                  <iframe
                    width="560"
                    height="315"
                    className="iframe-css"
                    src="https://www.youtube.com/embed/ELtbTkqXXQo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="card-scroll">
                  <iframe
                    width="560"
                    height="315"
                    className="iframe-css"
                    src="https://www.youtube.com/embed/ELtbTkqXXQo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>

                <div className="card-scroll">
                  <iframe
                    width="560"
                    height="315"
                    className="iframe-css"
                    src="https://www.youtube.com/embed/ELtbTkqXXQo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-text-view-one">
        <div className="view-one-text">
          <div className="one-text-view">
            <div>
              <p className="marvel-story">MARVEL'S LONG STORY SHORT</p>
            </div>
            <div>
              <p className="marvel-the-secret">
                The Secret Invasion Was Caused By Hypnotized Cows?! | Long Story
                Short
              </p>
            </div>
            <div className="learn-box">
              <p className="learn-text">
                Learn how Tony Stark and a ragtag group of heroes and villains
                stopped Earth from being taken over by an alien race!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
