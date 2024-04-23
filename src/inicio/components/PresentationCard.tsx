import React from "react";
import PresentationCardProp from "../types/PresentationCardProp";
import { useGlobalColorToggle } from "../../context/ToggleManager";
import patternBlack from "../../assets/img/Patters/lineasPrimaryWhite.png";
import patternWhite from "../../assets/img/Patters/lineasWhiteSecondary.png";

function PresentationCard({
  title,
  description,
  imgBlack,
  imgWhite,
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

  const getTextColorClass = (colorWhite: string, colorBlack: string) => {
    if (bgColor === "B") {
      return colorToggle ? colorBlack : colorWhite;
    } else if (bgColor === "W") {
      return colorToggle ? colorWhite : colorBlack;
    }
  };

  return (
    <div
      className={`flex flex-col md:flex-row xl:p-[100px] p-[30px] xl:gap-[150px] gap-[50px] ${
        sideImg === "left" ? "md:flex-row-reverse" : ""
      } ${getBgColorClass()}
    `}
    >
      <div className="flex-1 md:w-70 flex flex-col justify-center items-center md:items-start">
        <h1
          className={`text-[48px] 
        ${getTextColorClass("text-custom-primary", "text-custom-secondary")}
        font-title font-bold text-center md:text-left`}
        >
          {title}
        </h1>
        <p
          className={`
        ${getTextColorClass("text-custom-black", "text-custom-white")}
        text-[17px] font-text`}
        >
          {description}
        </p>
      </div>
      <div className="flex-1 md:w-30 flex items-center justify-center">
        <div className="h-full">
          <img src={getTextColorClass(imgBlack, imgWhite)} alt="" className="max-w-full h-[100%]" />
        </div>
      </div>
    </div>
  );
}

export default PresentationCard;
