import React from "react";
import { AxiosCharacters } from "../Components/axiosCharacters/AxiosCharacters";
import BlockFooter from "../Components/blockFooter/BlockFooter";
// import FooterHome from "../Components/FooterHome/FooterHome";
import NavbarPrivate from "../Components/NavPrivate/NavbarPrivate";
import { useAuth } from "../Context/authContext";
import Wallpaperbg from "../assets/mwpmarvel.webp";
import "../Styles/global-styles.css";

export default function Characters() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Loading</h1>;

  return (
    <div>
      <NavbarPrivate />
      <div className="bg-new-color h-[30rem]">
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
      {/* <FooterHome /> */}
      <BlockFooter />
    </div>
  );
}
