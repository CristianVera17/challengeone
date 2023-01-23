import React from "react";
import "./block-two.css";
import axios from "axios";
import Mlimg from "../../assets/mvblock.png";
import Mulogo from "../../assets/mulogo.png";
import { useState } from "react";
import { useEffect } from "react";

export default function BlockTwo() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(8);

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
    <div className="img-od">
      {/* INICIO DE BLOQUE PRINCIPAL */}
      <div className="box-inline mt-4">
        <div className="box-int-inline">
          <div className="inline-int">
            <div className="logo-mu">
              <img className="mu-logo" src={Mulogo} alt="imageunlimited" />
            </div>
            <div className="sets__eyebrow">AVALIABLE NOW</div>

            <div className="text-new-on">NEW ON MARVEL UNLIMITED</div>
            <div className="mt-2 text-white">
              Read these plus 30,000+ digital comics for $9.99 a month!
            </div>

            <button className="mt-5">
              <div className="box-botton">
                <div className="box-int-bot">
                  <div className="box-int-cor-two"></div>
                </div>
                GET MARVEL UNLIMITED
                <div className="box-int-bot">
                  <div className="box-int-cor"></div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="box-int-inline-two">
          <img className="image-block" src={Mlimg} alt="" />
        </div>
      </div>
      {/* FINAL DEL BLOQUE PRINCIPAL */}

      {/*BLOQUE SECUNDARIO*/}
      <div className="box-five-tree">
        <div className="box-int-tree">
          {items.slice(0, visible).map((item) => (
            <div className="box-scroll-card">
              <div className="box-load-img">
                <div className="box-img-load">
                  <div className="img-load-one-two">
                    <div className="box-d">
                      <div className="efect-hovr">
                        <img
                          className="box-img-card-slider"
                          src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="box-title-card-scroll">
                    {" "}
                    <p className="text-hover-card">{item.name}</p>
                    <p className="text-hover-card-two">{item.id}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* FINAL DEL BLOQUE SECUNDARIO */}
    </div>
  );
}
{
}
