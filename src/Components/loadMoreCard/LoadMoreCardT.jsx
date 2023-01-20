import React from "react";
import "./load-more-card-t.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Aside from "../aside/Aside";

export const LoadMoreCardT = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(8);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

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
          <h1>Hola</h1>
          {items.slice(0, visible).map((item) => (
            <div className="box-load-card">
              <div className="card-load">
                <div className="id">
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt=""
                  />
                </div>
                <div>Hola</div>
              </div>
              <div>Hola</div>
            </div>
          ))}
        </div>


        <div className="box-im-card">
          <div className="aside-box">

            <div>
               <div className="rail-featured__border-top">
              <span className="icon--svg icon--border" >
              <svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55"><path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#mask-2)"></path></svg>
              </span>
            </div>
            </div>
<div>holsa</div>

            <div>
            <div className="rail-featured__border-bottom">
              <span className="icon--svg icon--border">
              <svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55"><path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#mask-2)"></path></svg>
              </span>
            </div>
            </div>

          </div>


       
       <div>
        
       </div>
        </div>

        {/* <button onClick={showMoreItems}>Load Mojre</button> */}
      </div>
      <button onClick={showMoreItems}>Load Mojre</button>

    </div>
  );
};
