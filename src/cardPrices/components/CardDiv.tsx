import React from 'react'
import CardPrices from './CardPrices'
import CardPricesProp from '../types/CardPricesProp';

function CardDiv() {
  const Cuentas: CardPricesProp[] = [
    {
      title: 'Premium',
      subtitle: '$10.000',
      description: 'Capacidad ilimitada de cambio de ropa'
    },
    {
      title: 'SemiPremium',
      subtitle: '$5.000',
      description: 'Beneficios extras y nose'
    },
    {
      title: 'Gratis',
      subtitle: '$0',
      description: 'Cuenta limitada'
    },
  ];
  
  return (
    <div className='bg-custom-black'>
    <h1 className="text-center text-white text-[50px] font-title font-bold py-4">Niveles de suscripción</h1>
    <div className="flex justify-center items-center pb-4">
      <div className="max-w-screen-lg w-full px-4">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[50px]">
            {Cuentas.map((cuenta, index) => (
              <CardPrices
                key={index}
                title={cuenta.title}
                subtitle={cuenta.subtitle}
                description={cuenta.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardDiv