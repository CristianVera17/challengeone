import React from "react";
import { AxiosCharacters } from "../Components/axiosCharacters/AxiosCharacters";
import BlockFooter from "../Components/blockFooter/BlockFooter";
import NavbarPrivate from "../Components/NavPrivate/NavbarPrivate";
import { useAuth } from "../Context/authContext";
import Wallpaperbg from "../assets/mwpmarvel.webp";
import "../Styles/characters.css";
import NavbarOne from "../Components/Nav/NavbarOne";
import LogoInsider from "../assets/insider.png";


export default function Characters() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="layout-one">
    <header className="header-css">
     <nav id="navbar">
         <div className="navegacion">
             <NavbarOne/>
         </div>
     </nav>
 </header>

 <div className="content-box-cr">
 <div>
 <div className="bg-new-color-tree text-center h-10 flex justify-center items-center text-white  text-xs">
        <div className="max-lg:hidden font-bold">
          REWARD YOUR MARVEL FANDOM WITH
        </div>
        <div className="xl:hidden lg:hidden">
          STREAM THE GOTG: HOLIDAY SPECIAL ON
        </div>
        <img className="w-16 h-6 ml-3" src={LogoInsider} alt="" />
      </div>
 </div>
  
         <div className="bg-black h-[25rem]">
         <div className="box-int-wall">
           <div className="text-int-wall">
              <div className="ind">
                <p className="text-white text-5xl font-bold">
                  MARVEL CHARACTERS
                </p>
             </div>
             <div>
               <p className="text-white text-1xl">
                 Get hooked on a hearty helping of heroes and villains from the
                 humble House of Ideas!
               </p>
             </div>
           </div>
        </div>
         </div>
       </div>
      <AxiosCharacters />
       Characters HOME DEL VIDEO {user.email}
     <button onClick={handleLogout}>logout cerrar sesion</button>
 {/* <SimpleSlider/>
 <BlockTwo/>
 <LoadMoreCardT/>
 <BlockVideo />
 <BlockTwoCopie/>
//  <BlockFooter/> */}
<BlockFooter/>
 </div>
    // <div>
    //   <NavbarPrivate />
    //   <div className="bg-new-color h-[30rem]">
    //     <div className="bg-black h-[25rem]">
    //       <div className="box-int-wall">
    //         <div className="text-int-wall">
    //           <div className="ind">
    //             <p className="text-white text-5xl font-bold">
    //               MARVEL CHARACTERS
    //             </p>
    //           </div>
    //           <div>
    //             <p className="text-white text-1xl">
    //               Get hooked on a hearty helping of heroes and villains from the
    //               humble House of Ideas!
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <AxiosCharacters />
    //   Characters HOME DEL VIDEO {user.email}
    //   <button onClick={handleLogout}>logout cerrar sesion</button>
    //   <BlockFooter />
    // </div>
  );
}
