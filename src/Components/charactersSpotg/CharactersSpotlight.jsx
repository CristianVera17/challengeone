import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../Components/charactersSpotg/characters-spotlight.css"

export const CharactersSpotlight = () => {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=bd293897fc18a069507635e6566eda6f&hash=b5914d4e4f9eb0e3150961b9884d1336"
      )
      .then((res) => {
        setPersonajes(res.data.data.results.slice(0,4));
        // console.log(res.data)
      })
      .catch((error) => console.log(error));
  }, []);
  // console.log(personajes);

  return (
    <>
    <div>
    <div className="box-charact">
        <div className="box-charact-int">
          <div className="mt-5">
          <div className="sets__eyebrow"> <p className="feature-cd">CHARACTER SPOTLIGHT</p></div>
          </div>
        </div>
      </div>
    </div>
      <div className="boox-two">

        {personajes.map((per) => (
          <div className="boox-tree-cd" key={per.id}>
            <div>
              {" "}
              <img className="card-boox-cd"
                src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                alt=""
              />
              <div>
                {/* <p>{per.name}</p> */}
              </div>
              <div>
                {/* <section className="">
                  <figure>
                    <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`}alt=""/>
                  </figure>
                </section> */}
              </div>
              <div className=""></div>
              {/* <div>hs</div> */}
                        <div className="">
                         <div>
                                          <p >{per.name}</p>

                         </div>
                        </div>

              <div >
              <div ></div>

              </div>
            </div>
          </div>
        ))}
        </div>
      
    </>
  );
};
