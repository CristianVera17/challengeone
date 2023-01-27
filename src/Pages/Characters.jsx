import React from "react";
import LogoInsider from "../assets/insider.png";
import BlockFooter from "../Components/blockFooter/BlockFooter";
import { useAuth } from "../Context/authContext";
import "../Styles/characters.css";
import { FeatureCharactersAxios } from "../Components/featureCharacters/FeatureCharactersAxios";
import { CharactersSpotlight } from "../Components/charactersSpotg/CharactersSpotlight";
import { FeatureCharactersTwo } from "../Components/featureCharactersTwo/FeatureCharactersTwo";
import { SearchCharacters } from "../Components/searchCharacters/SearchCharacters";
import NavbarOne from "../Components/Nav/NavbarOne";
// 
export default function Characters() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="layout-one">
      <div className=" h-screen">
        {/* NAVBAR */}
        <header className="header-css">
          <nav id="navbar">
            <div className="navegacion">
              <NavbarOne/>
            </div>
          </nav>
        </header>
        {/* ------} */}

        {/* BLOCK BANNER */}
        <div className="content-box-cr">
          <div className="spacing-navbar"></div>
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

          <div className="characters-banner">
            <div className="box-int-wall">
              <div className="text-int-wall">
                <div className="ind">
                  <p className="marvel-cd-one">MARVEL CHARACTERS</p>
                </div>
                <div>
                  <p className="marvel-cd-two">
                    Get hooked on a hearty helping of heroes and villains from
                    the humble House of Ideas!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-section">
          <FeatureCharactersAxios />
          <CharactersSpotlight />
          <FeatureCharactersTwo />
          <SearchCharacters />
          <div className="flex justify-center">
          <button className="button-login" onClick={handleLogout}>Cerrar Sesion</button>
          </div>
          {/* <button className="button-login" onClick={handleLogout}>logout cerrar sesion</button> */}
          <BlockFooter />
        </div>
      </div>
    </div>
  );
}
