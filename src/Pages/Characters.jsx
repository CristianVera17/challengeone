import React from "react";
import NavbarPrivate from "../Components/NavPrivate/NavbarPrivate";
import { AxiosCharacters } from "../Components/axiosCharacters/AxiosCharacters";
import LogoInsider from "../assets/insider.png";
import BlockFooter from "../Components/blockFooter/BlockFooter";
import { useAuth } from "../Context/authContext";
import "../Styles/characters.css";
import { FeatureCharactersAxios } from "../Components/featureCharacters/FeatureCharactersAxios";
import { CharactersSpotlight } from "../Components/charactersSpotg/CharactersSpotlight";
// import { FeatureCharactersAxios } from "../Components/featureCharacters/featureCharactersAxios";

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
            <NavbarPrivate/>
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

      <div className="box-charact">
        <div className="box-charact-int">
          <div className="mt-5">
          <div className="sets__eyebrow"> <p className="feature-cd">FEATURED CHARACTERS</p></div>
          </div>
        </div>
      </div>

      <FeatureCharactersAxios/>
      <CharactersSpotlight/>
      <FeatureCharactersAxios/>
      {/* <div className="box-charact">
        <div className="box-charact-int">
          <div className="mt-5">
          <div className="sets__eyebrow"> <p className="feature-cd">MARVEL CHARACTERS LIST</p></div>
          </div>
        </div>
      </div> */}


      {/* <FeatureCharactersAxios/> */}
      <AxiosCharacters />
      Usuario/a {user.email}
      <button onClick={handleLogout}>CERRAR SESION</button>
      <BlockFooter />
    </div>
  );
};
