import React from "react";
import { AutomaticSlider } from "../Components/automaticSlider/AutomaticSlider";
// import BlockFive from "../Components/blockFive/BlockFive";
import BlockFooter from "../Components/blockFooter/BlockFooter";
import BlockTree from "../Components/blockTree/BlockTree";
import BlockTwo from "../Components/blockTwo/BlockTwo";
import BlockVideo from "../Components/BlockVideo/BlockVideo";
// import FooterHome from "../Components/FooterHome/FooterHome";
import NavbarOne from "../Components/Nav/NavbarOne";
// import { SliderAutomatic } from "../Components/SliderAutomatic/SliderAutomatic";

export default function HomePage() {
  return (
    <div className="h-96">
      <NavbarOne />
      <AutomaticSlider/>
      <BlockTwo />
      <BlockTree />
      <BlockVideo />
      <BlockTwo />
      <BlockFooter/>
    </div>
  );
}
