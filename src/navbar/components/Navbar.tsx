import React, { useState } from "react";
import NavbarLink from "./NavbarLink";
import LogoPrin1 from "../../assets/img/logo/RGB/Transparente/LogoSec/PrimaryWhite.png";
import NavbarLinkProp from "../types/NavbarLinkProp";
import { useGlobalColorToggle } from "../../context/ToggleManager";
import ToggleButton from "./ToggleButton";
import NavbarDropBtn from "./NavbarDropBtn";

function Navbar() {
  const { colorToggle, setColorToggle } = useGlobalColorToggle();

  const navItems: NavbarLinkProp[] = [
    { text: "Suscripciones", url: "" },
    { text: "Nosotros", url: "" },
    { text: "Descarga", url: "" },
    { text: "Contacto", url: "" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleColor = () => {
    setColorToggle(!colorToggle);
    console.log(colorToggle);
  };

  return (
    <div
      className={`fixed top-0 z-50 bg-gradient-to-b 
    ${
      colorToggle
        ? "from-custom-primary to-custom-primary  text-white"
        : "from-custom-secondary to-custom-secondary  text-custom-black"
    }
    flex md:flex-row ${menuOpen ? "flex-col" : "flex-row"} w-full mx-auto pt-2`}
    >
      <div className="flex items-center justify-between w-full md:w-auto  px-4">
        <img src={LogoPrin1} alt="" className="w-[75px] h-auto mr-10" />
        <NavbarDropBtn toggleFunc={toggleMenu} />
      </div>
      <div className={`md:flex w-full ${menuOpen ? "hidden" : "flex"}`}>
        <ul
          className={`hidden w-full md:flex ${
            menuOpen ? "" : "flex"
          } items-center gap-5`}
        >
          {navItems.map((item, index) => (
            <NavbarLink key={index} text={item.text} url={item.url} />
          ))}
        </ul>
        <div
          className={`md:flex hidden ${
            menuOpen ? "hidden" : "items-center flex pr-5"
          }`}
        >
          <ToggleButton toggleFunc={toggleColor} />
        </div>
      </div>
      <div className={`${menuOpen ? "p-3" : "hidden"}`}>
        <ul
          className={`md:hidden flex-col flex items-start justify-between gap-2`}
        >
          {navItems.map((item, index) => (
            <div
              className={`rounded-xl text-center shadow-md w-full p-[8px]
            ${
              colorToggle
                ? "bg-custom-secondary shadow-custom-accent text-custom-black"
                : "bg-custom-primary shadow-custom-accent text-custom-white"
            }
              `}
            >
              <NavbarLink key={index} text={item.text} url={item.url} />
            </div>
          ))}
          <div className={"pt-3"}>
            <ToggleButton toggleFunc={toggleColor} />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
