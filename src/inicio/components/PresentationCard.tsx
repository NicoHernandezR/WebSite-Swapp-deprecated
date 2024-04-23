import React from "react";
import PresentationCardProp from "../types/PresentationCardProp";
import { useGlobalColorToggle } from "../../context/ToggleManager";

function PresentationCard({
  title,
  description,
  img,
  sideImg,
  bgColor,
}: PresentationCardProp) {
  const { colorToggle, setColorToggle } = useGlobalColorToggle();

  const getBgColorClass = () => {
    if (bgColor === "B") {
      return colorToggle ? "bg-custom-black" : "bg-custom-white";
    } else if (bgColor === "W") {
      return colorToggle ? "bg-custom-white" : "bg-custom-black";
    }
  };

  const getTextColorClass = (colorWhite : string, colorBlack: string) => {
    if (bgColor === "B") {
      return colorToggle ? colorBlack : colorWhite;
    } else if (bgColor === "W") {
      return colorToggle ? colorWhite : colorBlack;
    }
  }

  return (
    <div
      className={`flex flex-col md:flex-row xl:p-[100px] p-[30px] md:gap-[150px] gap-[50px] ${
        sideImg === "left" ? "md:flex-row-reverse" : ""
      } ${getBgColorClass()}
    `}
    >
      <div className="flex-1 md:w-70 flex flex-col justify-center items-center md:items-start">
        <h1
          className={`text-[48px] 
        ${getTextColorClass("text-custom-primary","text-custom-secondary")}
        font-title text-center md:text-left`}
        >
          {title}
        </h1>
        <p
          className={`
        ${getTextColorClass("text-custom-black","text-custom-white")}
        text-[17px] font-text`}
        >
          {description}
        </p>
      </div>
      <div className="flex-1 md:w-30">
        <img src={img} alt="" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default PresentationCard;
