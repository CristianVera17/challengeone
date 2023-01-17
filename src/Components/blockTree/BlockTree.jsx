import React from "react";
import "./block-tree.css";
import Oneimg from "../../assets/onecard.png";
import Twoimg from "../../assets/twocard.png";
import Treeimg from "../../assets/treecard.png";
import Fiveimg from "../../assets/fivecard.png";
import Siximg from "../../assets/sixcard.png";
import Sevenimg from "../../assets/sevencard.png";
import Eigthimg from "../../assets/eigthcard.png";

export default function BlockTree() {
  return (
    <div>
      <div className="box-tree">
        <div className="box-tree-int">
          <div className="font-bold text-2xl">THE LATEST</div>
          {/* BOX */}
          <div className="box-tree-img">
            <div className="box-tree-img-one">
              <img className="box-img" alt="" src={Eigthimg} />
            </div>
            <div className="box-tree-img-two">
              <div className="font-bold">
                <p>COMICS</p>
              </div>
              <div className="text-2xl box-ext-card">
                <div className="box-int-card">
                  <h6 className="font-bold">
                    Five totally Unique Aspects of Dimension Z
                  </h6>
                </div>
              </div>
              <p>3 DAY AGO</p>
            </div>
          </div>
          {/* BOX */}
          <div className="box-line-tree"></div>
          {/* BOX */}
          <div className="box-tree-img">
            <div className="box-tree-img-one">
              <img className="box-img" alt="" src={Oneimg} />
            </div>
            <div className="box-tree-img-two">
              <div className="font-bold">
                <p>COMICS</p>
              </div>
              <div className="text-2xl">
                <div className="box-int-card">
                  <h6 className="font-bold">
                    Five totally Unique Aspects of Dimension Z
                  </h6>
                </div>
              </div>
              <p>3 DAY AGO</p>
            </div>
          </div>
          {/* BOX */}
          <div className="box-line-tree"></div>

          {/* BOX */}
          <div className="box-tree-img">
            <div className="box-tree-img-one">
              <img className="box-img" alt="" src={Twoimg} />
            </div>
            <div className="box-tree-img-two">
              <div className="font-bold">
                <p>COMICS</p>
              </div>
              <div className="text-2xl">
                <div className="box-int-card">
                  <h6 className="font-bold">
                    Five totally Unique Aspects of Dimension Z
                  </h6>
                </div>
              </div>
              <p>3 DAY AGO</p>
            </div>
          </div>
          {/* BOX */}
          <div className="box-line-tree"></div>
          {/* BOX */}
          {/*  */}
          <div className="box-tree-img">
            <div className="box-tree-img-one">
              <img className="box-img" alt="" src={Treeimg} />
            </div>
            <div className="box-tree-img-two">
              <div className="font-bold">
                <p>COMICS</p>
              </div>
              <div className="text-2xl">
                <div className="box-int-card">
                  <div className="box-int-card">
                    <h6 className="font-bold">
                      Five totally Unique Aspects of Dimension Z
                    </h6>
                  </div>
                </div>
              </div>
              <p>3 DAY AGO</p>
            </div>
          </div>

          {/*  */}

          {/* BOX */}
          <div className="box-line-tree"></div>
          {/* BOX */}
          <div className="box-tree-img">
            <div className="box-tree-img-one">
              <img className="box-img" alt="" src={Eigthimg} />
            </div>
            <div className="box-tree-img-two">
              <div className="font-bold">
                <p>COMICS</p>
              </div>
              <div className="text-2xl">
                <div className="box-int-card">
                  <h6 className="font-bold">
                    Five totally Unique Aspects of Dimension Z
                  </h6>
                </div>
              </div>
              <p>3 DAY AGO</p>
            </div>
          </div>
          {/* BOX */}
          <div className="box-line-tree"></div>
          {/* BOX */}
          <div className="box-tree-img">
            <div className="box-tree-img-one">
              <img className="box-img" alt="" src={Fiveimg} />
            </div>
            <div className="box-tree-img-two">
              <div className="font-bold">
                <p>COMICS</p>
              </div>
              <div className="text-2xl">
                <div className="box-int-card">
                  <h6 className="font-bold">
                    Five totally Unique Aspects of Dimension Z
                  </h6>
                </div>
              </div>
              <p>3 DAY AGO</p>
            </div>
          </div>
          {/* BOX */}
          <div className="box-line-tree"></div>
          {/* BOX */}
          <div className="box-tree-img">
            <div className="box-tree-img-one">
              <img className="box-img" alt="" src={Siximg} />
            </div>
            <div className="box-tree-img-two">
              <div className="font-bold">
                <p>COMICS</p>
              </div>
              <div className="text-2xl">
                <div className="box-int-card">
                  <h6 className="font-bold">
                    Five totally Unique Aspects of Dimension Z
                  </h6>
                  {/* <p>3 DAY AGO</p> */}
                </div>
              </div>
              <p>3 DAY AGO</p>
            </div>
          </div>
          {/* BOX */}
          <div className="box-line-tree"></div>
          {/* BOX */}
          <div className="box-tree-img">
            <div className="box-tree-img-one">
              <img className="box-img" alt="" src={Sevenimg} />
            </div>
            <div className="box-tree-img-two">
              <div className="font-bold">
                <p>COMICS</p>
              </div>
              <div className="text-2xl">
                <div className="box-int-card">
                  <h6 className="font-bold">
                    Five totally Unique Aspects of Dimension Z
                  </h6>
                </div>
              </div>
              <h6>Five totally Unique Aspects of Dimension Z</h6>
            </div>
            {/* <p>3 DAY AGO</p> */}
          </div>
          {/* BOX */}
          <div className="box-line-tree"></div>

          {/* BOX */}
          <div className="box-tree-img justify-center flex">
            <button className="btn-tree-card">Load more</button>
          </div>
          {/* BOX */}
          <div className="box-line-tree"></div>
        </div>
        <div className="box-tree-int-two">
          <div className="sidebar-css">
            <div>
              <p className="text-2xl font-bold">THE HYPE BOX</p>
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
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
