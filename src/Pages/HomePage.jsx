import React from "react";
import BlockFive from "../Components/blockFive/BlockFive";
import BlockTree from "../Components/blockTree/BlockTree";
import BlockTwo from "../Components/blockTwo/BlockTwo";
import BlockVideo from "../Components/BlockVideo/BlockVideo";
import FooterHome from "../Components/FooterHome/FooterHome";
import NavbarOne from "../Components/Nav/NavbarOne";
import { SliderAutomatic } from "../Components/SliderAutomatic/SliderAutomatic";

export default function HomePage() {
  return (
    <div className="h-96">
      <NavbarOne />
      <SliderAutomatic />
      <BlockTwo />
      <BlockTree />
      <BlockVideo />
      <BlockFive />
      <FooterHome />
    </div>
  );
}
