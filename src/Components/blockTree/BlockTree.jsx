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
              <div className="text-2xl">
                <h6>Five totally Unique Aspects of Dimension Z</h6>
              </div>
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
                <h6>Five totally Unique Aspects of Dimension Z</h6>
              </div>
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
                <h6>Five totally Unique Aspects of Dimension Z</h6>
              </div>
            </div>
          </div>
          {/* BOX */}
          <div className="box-line-tree"></div>
          {/* BOX */}
          <div className="box-tree-img">
            <div className="box-tree-img-one">
              <img className="box-img" alt="" src={Treeimg} />
            </div>
            <div className="box-tree-img-two">
              <div className="font-bold">
                <p>COMICS</p>
              </div>
              <div className="text-2xl">
                <h6>Five totally Unique Aspects of Dimension Z</h6>
              </div>
            </div>
          </div>
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
                <h6>Five totally Unique Aspects of Dimension Z</h6>
              </div>
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
                <h6>Five totally Unique Aspects of Dimension Z</h6>
              </div>
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
                <h6>Five totally Unique Aspects of Dimension Z</h6>
              </div>
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
                <h6>Five totally Unique Aspects of Dimension Z</h6>
              </div>
            </div>
          </div>
          {/* BOX */}
          <div className="box-line-tree"></div>

          {/* BOX */}
          <div className="box-tree-img justify-center flex">
            <button className="btn-tree-card">Load more</button>
            {/* <div className='box-tree-img-one'>
                       <img className='box-img' src={Cleanimg}/>
                    </div>
                    <div className='box-tree-img-two'>
                        <div className='font-bold'><p>COMICS</p></div>
                        <div className='text-2xl'><h6>Five totally Unique Aspects of Dimension Z</h6></div>
                    </div> */}
          </div>
          {/* BOX */}
          <div className="box-line-tree"></div>
        </div>
        <div className="box-tree-int-two">
          <div>box</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
