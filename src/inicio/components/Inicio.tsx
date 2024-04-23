import React from "react";
import logo from "../../assets/img/logo/CMYK/LogoPrin/LogoPrin4.jpg";
import patternWhite from "../../assets/img/Patters/tenderoWhitePrimary.png";
import patternBlack from "../../assets/img/Patters/tenderoPrimSec.png";
import PresentationCard from "./PresentationCard";
import PresentationCardProp from "../types/PresentationCardProp";
import Suscripciones from "../../suscripciones/components/Suscripciones"
import { useGlobalColorToggle } from "../../context/ToggleManager";

function Inicio() {

  const { colorToggle, setColorToggle } = useGlobalColorToggle();
  const PCard: PresentationCardProp[] = [
    {
      title: "Lorem Place holder",
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años',
      img: logo,
      sideImg: "left",
      bgColor: 'B'
    },
    {
      title: "Lorem Place holder",
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años',
      img: logo,
      sideImg: "right",
      bgColor: 'W',
    },
    {
      title: "Lorem Place holder",
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años',
      img: logo,
      sideImg: "left",
      bgColor: 'B'
    },
  ]
  
  return (
    <div style={{
      backgroundImage: `url(${colorToggle ? patternWhite: patternBlack})`,
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'contain', 
    }}
    className={`min-h-screen`}>
      <div className="flex flex-col md:flex-row p-[100px] gap-[150px]">
        <div className="flex-1">
          <img src={logo} alt="" className="max-w-full h-auto" />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center md:items-start">
          <h1 className={`text-[32px] 
          ${ colorToggle ? "text-custom-black" : "text-custom-white"}
          font-title font-bold text-center md:text-left`}>
            ¡La forma divertida, efectiva y gratis de cambiar ropa!
          </h1>
          <div className="mt-4 flex justify-center w-full">
            <button className={`w-full h-[50px]  rounded-xl shadow-md 
            ${colorToggle ? "bg-custom-accent shadow-custom-primary text-custom-black" : "bg-custom-black shadow-custom-secondary text-custom-white"}
            flex items-center justify-center font-bold
             font-custom-subtitle`}>
              Empezar
            </button>
            
          </div>
        </div>
      </div>

      <div>
        {PCard.map((item, index) => (
          <PresentationCard  key={index} title={item.title} description={item.description}
          img={item.img} sideImg={item.sideImg} bgColor={item.bgColor} />
        ))}
      </div>
    </div>
  );
}

export default Inicio;
