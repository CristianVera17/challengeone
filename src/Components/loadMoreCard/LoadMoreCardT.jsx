import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./load-more-card-t.css";

export const LoadMoreCardT = () => {
  const [items, setItems] = useState([]);

  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };
// 
  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=bd293897fc18a069507635e6566eda6f&hash=b5914d4e4f9eb0e3150961b9884d1336"
      )
      .then((res) => {
        setItems(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <div className="box-card-load">
        <div className="box-card-im">
          <div className="box-the-latest">
            <div className="sets__eyebrow-cd">THE LATEST</div>{" "}
          </div>

          {items.slice(0, visible).map((item) => (
            <div className="box-load-card">
              <div className="card-load">
                <div className="int-box-card-load">
                  <div className="load-img-card">
                    <img
                      className="load-img-css"
                      src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                      alt=""
                    />
                  </div>
                  <div className="load-text-box">
                    {" "}
                    <p className="font-bold">{item.name}</p>
                    <p>{item.id}</p>
                  </div>
                </div>
              </div>
              <div className="box-line-tree-two mt-5"></div>
            </div>
          ))}
        </div>

        <div className="box-im-card">
          <div className="aside-box">
            <div>
            <div class="rail-featured__border-top"><span class="icon--svg icon--border" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55"><path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#border-line_svg__mask-2)"></path></svg></span></div>
              <div>
                <p className="the-hype-box">THE HYPE BOX</p>
              </div>
              <div className="query-media">
                <div className="center-query">
                  <p className="text-media-query">
                    Can’t-miss news and updates from across the Marvel Universe!
                  </p>
                </div>
              </div>
            </div>
            <div className="content-load">
              {items.slice(0, visible).map((item) => (
                <div className="box-load-card-two">
                  <div className="card-load-two">
                    <div className="int-box-card-load-cd">
                      <div className="box-load-img-two">
                        <img
                          className="load-img-css-two"
                          src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                          alt=""
                        />
                      </div>

                      <div className="box-title-hype">
                        <p>{item.name}</p>
                        <p>{item.id}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div></div>
          </div>
          <div class="rail-featured__border-bottom"><span class="icon--svg icon--border" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55"><path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#border-line_svg__mask-2)"></path></svg></span></div>
          <div></div>
        </div>
      </div>
      <div className="box-button-spacing">
        <div className="box-button-spacing-two">
          <button className="mt-5" onClick={showMoreItems}>
            <div className="box-botton-cd">
              <div className="box-int-bot-cd">
                <div className="box-int-cor-two-cd"></div>
              </div>
              LOAD MORE
              <div className="box-int-bot-cd-two">
                <div className="box-int-cor-cd"></div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
