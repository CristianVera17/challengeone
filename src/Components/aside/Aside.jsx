import React from 'react'
import Oneimg from "../../assets/onecard.png";
import Twoimg from "../../assets/twocard.png";
import Treeimg from "../../assets/treecard.png";
import Fiveimg from "../../assets/fivecard.png";
import Siximg from "../../assets/sixcard.png";
import Sevenimg from "../../assets/sevencard.png";
import Eigthimg from "../../assets/eigthcard.png";

export default function Aside() {
  return (
    <>
     <div className="box-tree-int-two">
          <div className="sidebar-css">
            {/* <div>
              <p className="text-2xl font-bold">THE HYPE BOX</p>
            </div> */}
            <div className="rail-featured__border-top">
              <span className="icon--svg icon--border" >
              <svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55"><path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#mask-2)"></path></svg>

              </span>
            </div>
            <div>
              <p className="text-2xl font-bold ">THE HYPE BOX</p>
            </div>
            <div>
              Can’t-miss news and updates from across the Marvel Universe!
            </div>
            {/* CARD  */}
            <div className="">
              <div className="card-sidebar">
                <div className="sidebar-img">
                  <div>
                    <img src={Sevenimg} alt="" />
                  </div>
                </div>
                <div className="box-text-sidebar ml-5">
                  <div>TV SHOWS</div>
                  <div>
                    NEW TRAILER: Marvel's 'Moon Girl and Devil Dinosaur' coming
                    to Disney+
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="">
              <div className="card-sidebar">
                <div className="sidebar-img">
                  <div>
                    <img src={Sevenimg} alt="" />
                  </div>
                </div>
                <div className="box-text-sidebar ml-5">
                  <div>TV SHOWS</div>
                  <div>
                    NEW TRAILER: Marvel's 'Moon Girl and Devil Dinosaur' coming
                    to Disney+
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="">
              <div className="card-sidebar">
                <div className="sidebar-img">
                  <div>
                    <img src={Sevenimg} alt="" />
                  </div>
                </div>
                <div className="box-text-sidebar ml-5">
                  <div>TV SHOWS</div>
                  <div>
                    NEW TRAILER: Marvel's 'Moon Girl and Devil Dinosaur' coming
                    to Disney+
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="">
              <div className="card-sidebar">
                <div className="sidebar-img">
                  <div>
                    <img src={Sevenimg} alt="" />
                  </div>
                </div>
                <div className="box-text-sidebar ml-5">
                  <div>TV SHOWS</div>
                  <div>
                    NEW TRAILER: Marvel's 'Moon Girl and Devil Dinosaur' coming
                    to Disney+
                  </div>
                </div>
              </div>
            </div>
            <div className="card-sidebar">
              <div className="sidebar-img">
                <div>
                  <img src={Sevenimg} alt="" />
                </div>
              </div>
              <div className="box-text-sidebar ml-5">
                <div>TV SHOWS</div>
                <div>
                  NEW TRAILER: Marvel's 'Moon Girl and Devil Dinosaur' coming to
                  Disney+
                </div>
              </div>
            </div>
            <div className="rail-featured__border-bottom">
              <span className="icon--svg icon--border">
              <svg xmlns="http://www.w3.org/2000/svg" width="186" height="55" viewBox="0 0 186 55"><path d="M21.4 1L1 21.4V717h264.6l20.4-20.4V1H21.4z" mask="url(#mask-2)"></path></svg>
              </span>
            </div>
            {/*  */}
          </div>
        </div></>
  )
}
