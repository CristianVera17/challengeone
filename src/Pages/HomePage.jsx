import React from 'react';
import BlockFive from '../Components/blockFive/BlockFive';
import BlockHomeFour from '../Components/BlockHomeFour/BlockHomeFour';
import BlockHomeTree from '../Components/BlockHomeTree/BlockHomeTree';
import BlockHomeTwo from '../Components/BlockHomeTwo/BlockHomeTwo';
import BlockVideo from '../Components/BlockVideo/BlockVideo';
import Carousel from '../Components/Carousel/Carousel';
import FooterHome from '../Components/FooterHome/FooterHome';
import NavbarOne from '../Components/Nav/NavbarOne';
import { SliderAutomatic } from '../Components/SliderAutomatic/SliderAutomatic';

export default function HomePage() {
  return (
    <div className='h-96'>
     <NavbarOne/>
     <SliderAutomatic/>
     {/* <BlockHomeTwo/> */}
     {/* <BlockHomeFour/> */}
     {/* <BlockVideo/> */}
     {/* <BlockHomeTree/> */}
     {/* <Carousel/> */}
     <BlockFive/>
     <FooterHome/>

    </div>
  );
};
