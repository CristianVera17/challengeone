import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ImgMv from "../../assets/boxtwocopie.png";
import "./block-two-copie.css";

export default function BlockTwoCopie(Children) {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState();

  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=bd293897fc18a069507635e6566eda6f&hash=b5914d4e4f9eb0e3150961b9884d1336"
      )
      .then((res) => {
        setItems(res.data.data.results);
      });
  }, []);

  return (
    <div className="img-od-cdv">
      {/* INICIO DE BLOQUE PRINCIPAL */}
      <div className="box-inline-cdv mt-4">
        <div className="box-int-inline-cdv">
          <div className="inline-int-cdv mt-16">
            <div className="logo-mu-cdv">
              {/* <img className="mu-logo-cdv" src={Mulogo} alt="imageunlimited" /> */}
            </div>
            <div className="sets__eyebrow">ON SALE 1/18</div>

            <div className="text-new-on-cdv">NEW COMICS THIS WEEK</div>
            <div className="mt-2 text-white">
              Check out the newest Marvel comics coming out this week!
            </div>
            <div className="flex box-bottons-card">
              <button className="mt-5 font-bold">
                <div className="box-botton-cdd">
                  <div className="box-int-bot-cdd">
                    <div className="box-int-cor-two-cdd"></div>
                  </div>
                  SHOP DIGITAL COMICS
                  <div className="box-int-bot-cdd">
                    <div className="box-int-cor-cdd"></div>
                  </div>
                </div>
              </button>
              <button className="mt-5 button-two font-bold">
                <div className="box-botton-cdd">
                  <div className="box-int-bot-cdd">
                    <div className="box-int-cor-two-cdd"></div>
                  </div>
                  PRINT SUBSCRIPTIONS
                  <div className="box-int-bot-cdd">
                    <div className="box-int-cor-cdd"></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="box-int-inline-two-cdv">
          <img className="image-block-cd" src={ImgMv} alt="" />
        </div>
      </div>
      {/* FINAL DEL BLOQUE PRINCIPAL */}

      {/*BLOQUE SECUNDARIO*/}
      <div className="box-five-tree-cdv">
        <div className="box-int-tree-cdv">
          {items.slice(0, visible).map((item) => (
            <div key={item} className="box-scroll-card-cdv">
              <div className="box-load-img-cdv">
                <div className="box-img-load-cdv">
                  <div className="img-load-one-two-cdv">
                    <div className="box-d-cdv">
                      <div className="efect-hovr-cdv">
                        <img
                          className="box-img-card-slider-cdv"
                          src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="box-title-card-scroll-cdv">
                    {" "}
                    <p className="text-hover-card-cdv">{item.name}</p>
                    <p className="text-hover-card-two-cdv">{item.id}</p>
                    <p className="text-hover-card-two-cdv">{item.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
