import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//IMPORTACION DE IMAGENES
import LogoMarvel from "../../assets/marvelLogo.png";
import LogoInsider from "../../assets/insider.png";
import LogoUnlimited from "../../assets/limited.png";
import InLogo from "../../assets/in-logo.png";

const NavbarPrivate = () => {
  const [open, setOpen] = useState(false);
  return (
    // CONTENEDOR PRINCIPAL ENVUELVE TODO EL MENU
    // MAIN CONTAINER WRAPS THE ENTIRE MENU
    <div className="bg-new-color left-0 right-0 shadow-md">
      {/* INICIO DE CABECERA PRINCIPAL*/}
      {/* START OF MAIN HEADING */}
      <div className="top-0 left-0 right-0 shadow-md flex justify-around w-full">
        {/* BOTON CON ICONO DEL MENU */}
        {/* BUTTON WITH MENU ICON */}
        <button
          className="ml-4 text-white sm:hidden"
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {/*------------------------------------------------*/}

        {/* DIV PARA INICIAR SESION*/}
        {/* DIV TO START SESSION */}
        <div className="max-sm:hidden h-14 w-40 flex items-center justify-around min-sm:hidden text-white font-bold text-xs box-sign-in">
          <div>
            <img className="w-7 h-5 b-1 pl-2" src={InLogo} alt="" />
          </div>
          <div>SIGN IN</div>
          <div>|</div>
          <div>JOIN</div>
        </div>
        {/*------------------------------------------------*/}

        {/*LOGO DE MARVEL CABECERA*/}
        <div>
          <img className="w-30 h-14 b-1" src={LogoMarvel} alt="" />
        </div>
        {/*------------------------------------------------*/}

        <div className="max-sm:hidden h-14 w-56 flex items-center justify-between min-sm:hidden box-marvel-unlimited">
          {/* LOGO U DE UNLIMITED */}
          {/* U UNLIMITED LOGO */}
          <div>
            <img className="w-8 h-7 b-1 pl-2" src={LogoUnlimited} alt="" />
          </div>
          {/* --------------------------------------------*/}

          <div className="flex flex-col text-center ml-1">
            <div className="text-xs text-white font-bold">MARVEL UNLIMITED</div>
            <div className="text-xs text-white font-bold">SUBSCRIBE</div>
          </div>

          {/* BUSCADOR SIN FUNCIONALIDAD */}
          <div className="ml-3 box-search-nav w-12 h-full flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          {/*----------------------------------------------*/}
        </div>

        <div className="sm:hidden">
          <div className="w-10 h-full flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/*LINKS DE MENU*/}
      <div className="max-lg:hidden text-center flex justify-center items-center border-t border-zinc-700 py-2">
        <div className="flex w-1/2 justify-around font-bold text-white text-xs">
          {" "}
          <NavLink to="/home">NEWS</NavLink>
          <p>COMICS</p>
          <NavLink to="/login">CHARACTER</NavLink>
          <p>MOVIES</p>
          <p>TV SHOWS</p>
          <p>GAMES</p>
          <p>VIDEOS</p>
          <p>MORE</p>
        </div>
      </div>
      {/*------------------------------------------------*/}

      {/*BARRA CON TEXTO MAS LOGO DE DISNEY*/}
      {/* BAR WITH TEXT PLUS DISNEY LOGO */}
      <div className="bg-new-color-tree text-center h-10 flex justify-center items-center text-white  text-xs">
        <div className="max-lg:hidden font-bold">
          REWARD YOUR MARVEL FANDOM WITH
        </div>
        <div className="xl:hidden lg:hidden">
          STREAM THE GOTG: HOLIDAY SPECIAL ON
        </div>
        <img className="w-16 h-6 ml-3" src={LogoInsider} alt="" />
      </div>
      {/*-------------------------------------------------*/}

      {/* MENU LATERAL */}
      <div
        className={`${
          !open && "hidden"
        } bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`${
          open ? "w-80" : "w-0"
        } bg-cyan-600 min-h-screen fixed top-0 left-0 transition-all duration-300`}
      >
        <div className={`${!open && "hidden"} pt-3`}>
          <button
            className="ml-4 text-white mb-14"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/*LINKS MENU LATERAL*/}
          <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
            Link 1
          </div>
          <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
            Link 2
          </div>
          <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
            Link 3
          </div>
          <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
            Link 4
          </div>
          <div className="text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2">
            Link 5
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarPrivate;
