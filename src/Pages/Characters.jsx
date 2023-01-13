import React from "react";
import FooterHome from "../Components/FooterHome/FooterHome";
import NavbarPrivate from "../Components/NavPrivate/NavbarPrivate";
import { useAuth } from "../Context/authContext";

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
        <div className="bg-gray-800 h-[25rem]"></div>
      </div>
      <div className="bg-green-500 w-screen h-96 flex items-center justify-center flex-col">
        <div>
          <h1 className="text-5xl font-bold text-white">MARVEL CHARACTERS</h1>
        </div>
        <div>
          <p className="text-white">
            Get hooked on a hearty helping of heroes and villains from the
            humble House of Ideas!
          </p>
        </div>
      </div>
      Characters HOME DEL VIDEO {user.email}
      <button onClick={handleLogout}>logout cerrar sesion</button>
      <FooterHome />
    </div>
  );
}
