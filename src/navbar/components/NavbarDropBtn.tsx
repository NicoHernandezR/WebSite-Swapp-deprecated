import React from 'react'
import ToggleButtonProp from '../types/ToggleButtonProp'
import { useGlobalColorToggle } from '../../context/ToggleManager';

function NavbarDropBtn({toggleFunc}: ToggleButtonProp) {

  const { colorToggle, setColorToggle } = useGlobalColorToggle();

  return (
    <button
    onClick={toggleFunc}
    data-collapse-toggle="navbar-hamburger"
    type="button"
    className={`inline-flex items-center justify-center p-2 w-10 h-10 text-sm
    ${colorToggle ? "bg-custom-white hover:bg-gray-100"
    : "bg-custom-black "}
     text-gray-500 rounded-lg  ocus:ring-gray-200
      focus:outline-none focus:ring-2 f md:hidden absolute sm:left-[90%] left-[85%] mr-5" 
    aria-controls="navbar-hamburger`}
    aria-expanded="false"
  >
    <svg
      className="w-5 h-5"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 17 14"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 1h15M1 7h15M1 13h15"
      />
    </svg>
  </button>
  )
}

export default NavbarDropBtn