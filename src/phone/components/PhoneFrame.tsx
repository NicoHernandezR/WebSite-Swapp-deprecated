import React from 'react';

const PhoneFrame = ({ children }) => {
  return (
    <div className="relative w-[75px] h-[200px] bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      {/* Pantalla del teléfono */}
      <div className="bg-white w-full h-[130px]"></div>

      {/* Altavoz superior */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-gray-800 rounded-full"></div>

      {/* Cámara frontal */}
      <div className="absolute top-[5px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>

      {/* Botón de inicio */}
      <div className="absolute bottom-[5px] left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-800 rounded-full"></div>

      {/* Contenido de la pantalla */}
      <div className="absolute top-[35px] left-[2px] right-[2px] bottom-[35px] overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default PhoneFrame;
