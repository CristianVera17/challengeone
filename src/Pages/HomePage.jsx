import React from "react";
import { AutomaticSlider } from "../Components/automaticSlider/AutomaticSlider";
import BlockFooter from "../Components/blockFooter/BlockFooter";
import BlockTree from "../Components/blockTree/BlockTree";
import BlockTwo from "../Components/blockTwo/BlockTwo";
import BlockVideo from "../Components/BlockVideo/BlockVideo";
import NavbarOne from "../Components/Nav/NavbarOne";
import "../Styles/home-page.css"

export default function HomePage() {
  let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('navbar').style.top = '0';
    }
    else{
        document.getElementById('navbar').style.top = '-200px';
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}
  return (
    <div>
      {/* <NavbarOne />
      <AutomaticSlider/>
      <BlockTwo />
      <BlockTree />
      <BlockVideo />
      <BlockTwo />
      <BlockFooter/> */}
       <header>
        <nav id="navbar">
            <div class="logo">
                {/* <img src="logo.png" alt=""> */}
            </div>
            <div class="navegacion">
                <NavbarOne/>
            </div>
        </nav>
    </header>
    <div className="text-section">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est voluptate in corporis asperiores sequi adipisci neque eos,
        provident temporibus reprehenderit aspernatur dignissimos perferendis maiores commodi voluptatum quos accusantium,
        excepturi alias. Corrupti unde fuga eveniet, dicta a aliquam nobis ipsam aliquid quasi beatae optio architecto at
        consequatur libero qui commodi eos vitae harum numquam facere distinctio culpa ex aut! Eaque dolor commodi ab magnam,
        animi fugit ducimus iste fuga nihil temporibus possimus. Accusantium, ratione minima dolor porro officiis excepturi
        libero dolore. Hic at deleniti quis nesciunt sit illo natus repellendus, dignissimos tempora numquam facere sequi
        aliquam modi eaque animi corporis?
    </div>
    </div>
  );
}
