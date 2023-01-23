import React from "react";
import NavbarOne from "../Components/Nav/NavbarOne";
import BlockTwo from "../Components/blockTwo/BlockTwo";
import BlockVideo from "../Components/BlockVideo/BlockVideo";
import BlockFooter from "../Components/blockFooter/BlockFooter";
import "../Styles/home-page.css"
import SimpleSlider from "../Components/carousel/SimpleSlider";
import { LoadMoreCardT } from "../Components/loadMoreCard/LoadMoreCardT";
import BlockTwoCopie from "../Components/blockTwoCopie/BlockTwoCopie";


export default function HomePage() {
// JAVASCRIPT PARA QUE EL MENU CUANDO HACEMOS SCROLL HACIA ABAJO DESAPARESCA Y HACIA ARRIBA APARECE
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
    <div className="layout-one">
       <header className="header-css">
        <nav id="navbar">
            <div className="navegacion">
                <NavbarOne/>
            </div>
        </nav>
    </header>
    <SimpleSlider/>
    <BlockTwo/>
    <LoadMoreCardT/>
    <BlockVideo />
    <BlockTwoCopie/>
    <BlockFooter/>
    </div>
  );
}
