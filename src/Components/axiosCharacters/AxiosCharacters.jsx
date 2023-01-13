import React from "react";
import "./axios-characters.css"
// import Menu from "../Components/Menu/Menu";
import axios from "axios";
import { useState, useEffect } from "react";

// import MenuPrivate from "../Components/MenuPrivate/MenuPrivate";
// https://gateway.marvel.com:443/v1/public/characters?apikey=bd293897fc18a069507635e6566eda6f
// key private 47b87d4f257515604dc116d8ce9ec8099ab186d1
// key public bd293897fc18a069507635e6566eda6f
// ts
// 147b87d4f257515604dc116d8ce9ec8099ab186d1bd293897fc18a069507635e6566eda6f
// hash b5914d4e4f9eb0e3150961b9884d1336



export const AxiosCharacters = () => {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=bd293897fc18a069507635e6566eda6f&hash=b5914d4e4f9eb0e3150961b9884d1336"
      )
      .then((res) => {
        setPersonajes(res.data.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(personajes);

  return (
    <div className="box-characters">
      <h1>Marvel 1</h1>
      <div className="box-characters-one">
        {personajes.map((per) => (
          <div className="box-characters-card" key={per.id}>
            <div>
              {" "}
              <img
                src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                alt=""
              />
              <div>
                <p>{per.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
