import React from "react";
import PresentationCardProp from "../types/PresentationCardProp";

function PresentationCard({
  title,
  description,
  img,
  sideImg,
}: PresentationCardProp) {
  return (
    <div
      className={`flex flex-col md:flex-row p-[100px] gap-[150px] ${
        sideImg === "left" ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 md:w-70 flex flex-col justify-center items-center md:items-start">
        <h1 className="text-[48px] text-custom-secondary font-title text-center md:text-left">
          {title}
        </h1>
        <p className="text-custom-white text-[17px] font-text" >{description}</p>
      </div>
      <div className="flex-1 md:w-30">
        <img src={img} alt="" className="max-w-full h-auto" />
      </div>
    </div>
  );
}

export default PresentationCard;
