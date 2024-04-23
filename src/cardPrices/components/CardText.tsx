import React from 'react';
import CardTextProp from '../types/CardTextProp';

function CardText({ textType, content }: CardTextProp) {
  let fontStyleClass = 'text-custom-white';
  let divStyle = ''

  // Determinar la clase de estilo de fuente basada en el tipo de texto
  switch (textType) {
    case 'title':
      fontStyleClass += 'font-title font-bold text-[30px] text-custom-white'; // Por ejemplo, negrita y tamaño de fuente grande
      break;
    case 'subtitle':
      fontStyleClass += 'font-subtitle text-[20px] text-custom-accent'; // Por ejemplo, seminegrita y tamaño de fuente grande
      break;
    case 'text':
    default:
      fontStyleClass += 'font-text text-[15px] text-wrap text-custom-white'; // Por ejemplo, fuente normal y tamaño de fuente base
      break;
  }

  return (
    <div className=''>
      <p className={` ${fontStyleClass} break-words `}>
        {content}
      </p>
    </div>
  );
}

export default CardText;
