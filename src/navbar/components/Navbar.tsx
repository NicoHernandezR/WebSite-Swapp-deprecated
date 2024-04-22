import React, { useState } from "react";
import NavbarLink from "./NavbarLink";
import LogoPrin1 from "../../assets/img/LogoPrin1.png";
import NavbarLinkProp from "../types/NavbarLinkProp";

function Navbar() {
  const navItems: NavbarLinkProp[] = [
    { text: "Productos", url: "" },
    { text: "Nosotros", url: "" },
    { text: "Ayuda", url: "" },
    { text: "Descarga", url: "" },
    { text: "Contacto", url: "https://www.google.com" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`relative bg-gradient-to-b from-custom-primary to-custom-black 
    flex md:flex-row ${menuOpen ? "flex-col" : "flex-row"} w-full mx-auto pt-2 text-white`}>
      <div className="flex items-center justify-between w-full md:w-auto  px-4">
        <img src={LogoPrin1} alt="" className="w-[75px] h-auto mr-10" />
        <button onClick={toggleMenu} className="md:hidden">
          Menu
        </button>
      </div>
      <div className={`md:flex ${menuOpen ? "hidden" : "flex"}`}>
        <ul
          className={`hidden md:flex ${
            menuOpen ? "" : "flex"
          } items-center justify-between gap-2`}
        >
          {navItems.map((item, index) => (
            <NavbarLink key={index} text={item.text} url={item.url} />
          ))}
        </ul>
      </div>
      <div className={`${menuOpen ? "p-3" : "hidden"}`}>
        <ul className={`md:hidden flex-col flex items-start justify-between gap-2`}>
          {navItems.map((item, index) => (
            <div className="bg-custom-secondary text-custom-black w-full p-[8px]">
              <NavbarLink key={index} text={item.text} url={item.url} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
