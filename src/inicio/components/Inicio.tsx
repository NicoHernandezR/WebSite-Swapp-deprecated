import React from "react";
import logo from "../../assets/img/logo/CMYK/LogoPrin/LogoPrin4.jpg";
import PresentationCard from "./PresentationCard";
import PresentationCardProp from "../types/PresentationCardProp";

function Inicio() {

  const PCard: PresentationCardProp[] = [
    {
      title: "titulo",
      description: "Descripcion de lo que hace o deberia hace nose",
      img: logo,
      sideImg: "right"
    },
    {
      title: "titulo",
      description: "Descripcion de lo que hace o deberia hace nose",
      img: logo,
      sideImg: "left"
    },
    {
      title: "titulo",
      description: "Descripcion de lo que hace o deberia hace nose",
      img: logo,
      sideImg: "right"
    },
  ]
  
  return (
    <>
      <div className="flex flex-col md:flex-row p-[100px] gap-[150px]">
        <div className="flex-1">
          <img src={logo} alt="" className="max-w-full h-auto" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <h1 className="text-[32px] text-custom-white font-title text-center md:text-left">
            ¡La forma divertida, efectiva y gratis de cambiar ropa!
          </h1>
          <div className="mt-4 flex justify-center w-full">
            <button className="w-full h-[50px] bg-custom-primary rounded-xl 
            shadow-md shadow-custom-secondary flex items-center justify-center
            text-custom-white font-custom-subtitle">
              Empezar
            </button>
            
          </div>
        </div>
      </div>

      <div>
        {PCard.map((item, index) => (
          <PresentationCard  key={index} title={item.title} description={item.description}
          img={item.img} sideImg={item.sideImg} />
        ))}
      </div>
    </>
  );
}

export default Inicio;
