import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../Components/searchCharacters/search-characters.css";

export const SearchCharacters = () => {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=bd293897fc18a069507635e6566eda6f&hash=b5914d4e4f9eb0e3150961b9884d1336"
      )
      .then((res) => {
        setPersonajes(res.data.data.results.slice(0, 18));
        // console.log(res.data)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="boox-title-chr mt-16">
        <div></div>
        <div className="boox-title-chrt">
          <div className="box-spacing-text-tw">
            <div className="title-spacing-two">
              <p className="feature-characters-text">MARVEL CHARACTERS LIST</p>
            </div>
          </div>
          <div className="search-box mt-7 ">
            <div className="box-search mt-7">
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <input
                  className="input-search"
                  type="search"
                  placeholder="SEARCH"
                  autoFocus
                />
              </div>
            </div>
            <div className="box-movie mt-7">
              <div className="mr-4 font-bold text-black">MOVIE</div>
              <div className="font-bold text-black tv-box">TV</div>
            </div>
          </div>

          {/* <div className="search-box">
            <div className="box-search">
              <div>
              <div className="box-search-nav">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
              </div>
            
            </div>
            <div className="box-movie"></div>

          </div> */}
        </div>
      </div>

      <div className="boox-title-chr mt-7">
        <div className="boox-title-chrt mt-7">
          <div className="">
            <div className="title-spacing-two-tree">
              <div>2710 RESULTS</div>
              <div>SORT BY A-Z</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="boox-cav">
          <div></div>
          {personajes.map((per) => (
            <div className="booox-cav" key={per.id}>
              <div>
                {" "}
                <div>{/* <p>{per.name}</p> */}</div>
                <div>
                  <section className="container">
                    <figure>
                      <img
                        src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                        alt=""
                      />
                    </figure>
                  </section>
                </div>
                <div className="line-box"></div>
                <div className="btn btn2">
                  <div>
                    <p className="font-bold text-white p-4">{per.name}</p>
                  </div>
                </div>
                <div className="boooox">
                  <div className="box-int-cor-rd-cd"></div>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="flex">
            <div>h</div>
            <div>h</div>
            <div>h</div>
            <div>h</div>
          </div> */}
        </div>
      </div>
    </>
  );
};
