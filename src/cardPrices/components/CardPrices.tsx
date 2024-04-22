import React from 'react'
import CardText from './CardText'
import CardPricesProp from '../types/CardPricesProp'

function CardPrices({title, subtitle, description}: CardPricesProp) {
  return (
    <div className='w-[250px] h-[300px] border-[1px] border-custom-white 
    rounded-xl p-5 bg-custom-primary transition-transform transform hover:scale-110'>
      <CardText textType="title" content={title} />
      <CardText textType="subtitle" content={subtitle} />
      <CardText textType="normal" content={description} />
    </div>
  )
}

export default CardPrices